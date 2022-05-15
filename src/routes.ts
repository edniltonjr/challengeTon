import { Router } from "express";

import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { AuthenticateUserController } from "./modules/users/useCases/account/AuthenticateUserController";
import { CountNumberHitsController } from "./modules/users/useCases/countNumberHits/CountNumberHitsController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";
import { ProfileUserController } from "./modules/users/useCases/profileUser/ProfileUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const profileUserController = new ProfileUserController();

const countNumberHitsController = new CountNumberHitsController();

routes.post("/user/", createUserController.handle);
routes.get("/user/", ensureAuthenticateUser, profileUserController.handle);
routes.post("/auth/", authenticateUserController.handle);

routes.get("/hits/count", countNumberHitsController.handle);

export { routes };
