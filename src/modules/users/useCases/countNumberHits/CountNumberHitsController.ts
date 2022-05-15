import { Request, Response } from "express";

import { CountNumberHitsUseCase } from "./CountNumberHitsUseCase";

class CountNumberHitsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const countNumberHitsUseCase = new CountNumberHitsUseCase();

    const count = await countNumberHitsUseCase.execute();

    return response.json(count);
  }
}

export { CountNumberHitsController };
