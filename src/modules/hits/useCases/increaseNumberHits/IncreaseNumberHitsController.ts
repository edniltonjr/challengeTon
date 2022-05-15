import { Request, Response } from "express";

import { IncreaseNumberHitsUseCase } from "./IncreaseNumberHitsUseCase";

class IncreaseNumberHitsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const increaseNumberHitsUseCase = new IncreaseNumberHitsUseCase();

    const increase = await increaseNumberHitsUseCase.execute();

    return response.json(increase);
  }
}

export { IncreaseNumberHitsController };
