import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const createClientUseCase = new CreateUserUseCase();
    const result = await createClientUseCase.execute({ name, email, password });

    return response.json(result);
  }
}
