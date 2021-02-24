import User from "./models/UserSchema";
import { Result } from "../common/response/IResultT";
import { UserLoginResponse } from "../common/entityBL/user/UserLoginResponse";
import { UserLoginInput } from "../common/entityBL/user/UserLoginInput";
import { UserRegisterResponse } from "../common/entityBL/user/UserRegisterResponse";
import { UserRegisterInput } from "../common/entityBL/user/UserRegisterInput";
import bcrypt from "bcrypt";
const jwt = require("jsonwebtoken");

export class UserDAL {
  public login(data: UserLoginInput): Result<UserLoginResponse> {
    let email = data.email;

    var res = new Result<UserLoginResponse>(
      new UserLoginResponse("", "", ""),
      "",
      "",
      false
    );

    User.findOne({ email }).exec((error: any, user: any) => {
      if (error) {
        res.isSuccses = false;
        res.error = error;
        return res;
      } else if (user) {
        if (this.authenticate(data.password)) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });

          const { firstName, lastName } = user;
          res.data.firstName = firstName;
          res.data.lastName = lastName;
          res.data.token = token;
          res.isSuccses = true;
          console.log(res)
          return res;
        }
      }
      res.isSuccses = false;
      res.error = "Invalid password";
      return res;
    });
    return res;
  }

  public authenticate(password: string): Promise<boolean> {
    const hash_password = bcrypt.hashSync(password, 10);
    return bcrypt.compare(password, hash_password);
  }

  public createHashedPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  public register(data: UserRegisterInput): Result<UserRegisterResponse> {
    let email = data.email;
    var res = new Result<UserRegisterResponse>(
      new UserRegisterResponse("", "", ""),
      "",
      "",
      false
    );

    User.findOne({ email }).exec((error: any, user: any) => {
      if (user) {
        res.isSuccses = false;
        res.error = "User is already exist";
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

      _user.save((error, data) => {
        if (error) {
        }

        if (data) {
        }
      });
    });

    return res;
  }
}
