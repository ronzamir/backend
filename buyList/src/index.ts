import App from "./app";
import UserController from "./controllers/Usercontroller";
import * as bodyParser from "body-parser";
import loggerMiddleware from "./middleware/logger";
require("dotenv").config();
require("./db/index");

const PORT = process.env.PORT;

const app = new App({
  port: Number(process.env.PORT),
  controllers: [new UserController()],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
  ],
});

app.listen();
