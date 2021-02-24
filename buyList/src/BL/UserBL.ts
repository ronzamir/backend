import { UserDAL } from "../DAL/UserDAL";
import { Result } from "../common/response/IResultT";
import { UserLoginResponse } from "../common/entityBL/user/UserLoginResponse";
import { UserLoginInput } from "../common/entityBL/user/UserLoginInput";
import { UserRegisterInput } from "../common/entityBL/user/UserRegisterInput";
import { UserRegisterResponse } from "../common/entityBL/user/UserRegisterResponse";

export default class UserBL {
  private userDal: UserDAL;

  constructor() {
    this.userDal = new UserDAL();
  }

  public login(data: UserLoginInput): Result<UserLoginResponse> {
    return this.userDal.login(data);
  }
  public register(data: UserRegisterInput): Result<UserRegisterResponse> {
    return this.userDal.register(data);
  }
  
}
