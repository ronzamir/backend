import User from "./models/UserSchema";
import { Result } from "../common/response/IResultT";
import { UserLoginResponse } from "../common/entityBL/user/UserLoginResponse";
import { UserLoginInput } from "../common/entityBL/user/UserLoginInput";
import { UserRegisterResponse } from "../common/entityBL/user/UserRegisterResponse";
import { UserRegisterInput } from "../common/entityBL/user/UserRegisterInput";
import bcrypt from "bcrypt";
const jwt = require("jsonwebtoken");

export class UserDAL {
  public async login(data: UserLoginInput): Promise<Result<UserLoginResponse>> {
    let email = data.email;

    var res = new Result<UserLoginResponse>(
      new UserLoginResponse("", "", ""),
      "",
      "",
      false,
    );
    try {   
      const user = await User.findOne({ email }).exec();
      if(user === null){
        res.isSuccses = false;
        res.error = "you need to singup";
        return res;
      }
      {
        if (this.authenticate(data.password)) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });
          const { firstName, lastName } = user;
          res.data.firstName = firstName;
          res.data.lastName = lastName;
          res.data.token = token;
          res.isSuccses = true;
         
          return res;
        }
      }
    } catch (err) {
      
      res.isSuccses = false;
      res.error = err;
      return res;
    }
    return res;
  }

  public authenticate(password: string): Promise<boolean> {
    const hash_password = bcrypt.hashSync(password, 10);
    return bcrypt.compare(password, hash_password);
  }

  public createHashedPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  public async register(data: UserRegisterInput,): Promise<Result<UserRegisterResponse>> {

    let userEmail = data.email;
    let userName= data.username;
    var res = new Result<UserRegisterResponse>(
      new UserRegisterResponse("", "", ""),
      "",
      "",
      false,
    );

    try {
   
      let user = await User.findOne({  $or: [
        {email: userEmail}
        ,{username:userName} 
      ] }).exec();
     
      if(user.length !=0){
        res.isSuccses = false;
        res.error = "User is already exist";
        return res;
      }
      
      const { firstName, lastName, email, password, username } = data;
      let _user = new User({
        firstName,
        lastName,
        username,
        email,
        hash_password: this.createHashedPassword(password),
        role: "admin",
      });
     
      try {
        let saveUser = await _user.save();
        res.isSuccses = true;
        res.error = "User is save succsesfuly";
       
      }
      catch (error) {
        console.log("error",error);
      }

    } catch (err) {
      res.isSuccses = false;
      res.error = "User is already exist";
    }
    return res;
  }
}
