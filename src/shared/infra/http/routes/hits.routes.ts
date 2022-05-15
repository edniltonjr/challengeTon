import { Router } from "express";

import { CountNumberHitsController } from "../../../../modules/hits/useCases/countNumberHits/CountNumberHitsController";
import { IncreaseNumberHitsController } from "../../../../modules/hits/useCases/increaseNumberHits/IncreaseNumberHitsController";

const countNumberHitsController = new CountNumberHitsController();
const increaseNumberHitsController = new IncreaseNumberHitsController();

const hitsRoutes = Router();

hitsRoutes.get("/count", countNumberHitsController.handle);
hitsRoutes.get("/increase", increaseNumberHitsController.handle);

export { hitsRoutes };
