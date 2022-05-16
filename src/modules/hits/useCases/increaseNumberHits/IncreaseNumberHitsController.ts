import { Request, Response } from "express";

import { CountApiProvider } from "../../../../shared/infra/adapters/providers/CounterHits/implementations/CountApi";
import { IncreaseNumberHitsUseCase } from "./IncreaseNumberHitsUseCase";

class IncreaseNumberHitsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const countHitsProvider = new CountApiProvider();

    const increaseNumberHitsUseCase = new IncreaseNumberHitsUseCase(
      countHitsProvider
    );

    const increase = await increaseNumberHitsUseCase.execute();

    return response.json(increase);
  }
}

export { IncreaseNumberHitsController };
