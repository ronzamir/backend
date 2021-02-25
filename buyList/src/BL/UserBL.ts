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

  public async login(data: UserLoginInput):Promise< Result<UserLoginResponse>> {
    return await this.userDal.login(data);
  }
  public async register(data: UserRegisterInput): Promise<Result<UserRegisterResponse>> {
    console.log("data ",data);
     return await this.userDal.register(data);
  }
}
