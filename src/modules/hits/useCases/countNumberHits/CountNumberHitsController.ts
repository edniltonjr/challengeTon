import { Request, Response } from "express";

import { CountApiProvider } from "../../../../shared/infra/adapters/providers/CounterHits/implementations/CountApi";
import { CountNumberHitsUseCase } from "./CountNumberHitsUseCase";

class CountNumberHitsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const countHitsProvider = new CountApiProvider();
    const countNumberHitsUseCase = new CountNumberHitsUseCase(
      countHitsProvider
    );

    const count = await countNumberHitsUseCase.execute();

    return response.json(count);
  }
}

export { CountNumberHitsController };
