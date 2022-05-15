import { Router } from "express";

import { AuthenticateUserController } from "./modules/users/useCases/account/AuthenticateUserController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routes.post("/user/", createUserController.handle);
routes.post("/auth/", authenticateUserController.handle);

export { routes };
