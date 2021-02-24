import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "./interfaces/IControllerBase";

class ShoppingController implements IControllerBase {
  public path = "/";
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post("user/login", this.login);
  }

  login = async (req: Request, res: Response) => {
    const { username, password } = req?.body;
    if (
      !username ||
      !password ||
      typeof password !== "string" ||
      typeof username !== "string"
    ) {
      res.send("Username or password is not valid data.");
      return;
    }
  };
}

export default ShoppingController;
