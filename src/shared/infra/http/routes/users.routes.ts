import { Router } from "express";

import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { ProfileUserController } from "../../../../modules/accounts/useCases/profileUser/ProfileUserController";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";

const createUserController = new CreateUserController();
const profileUserController = new ProfileUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

userRoutes.get(
  "/profile",
  ensureAuthenticateUser,
  profileUserController.handle
);

export { userRoutes };
