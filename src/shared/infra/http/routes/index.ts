import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { hitsRoutes } from "./hits.routes";
import { userRoutes } from "./users.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/hits", hitsRoutes);
routes.use(authenticateRoutes);

export { routes };
