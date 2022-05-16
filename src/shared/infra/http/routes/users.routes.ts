import { Router } from "express";

import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUser/ListUserController";
import { ProfileUserController } from "../../../../modules/accounts/useCases/profileUser/ProfileUserController";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";

const createUserController = new CreateUserController();
const profileUserController = new ProfileUserController();
const listUserController = new ListUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

userRoutes.get("/", listUserController.handle);

userRoutes.get(
  "/profile",
  ensureAuthenticateUser,
  profileUserController.handle
);

export { userRoutes };
