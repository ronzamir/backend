import { Router } from "express";

interface IControllerBase {
    initRoutes(): any
    router : Router;
}

export default IControllerBase