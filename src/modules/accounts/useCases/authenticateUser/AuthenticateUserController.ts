import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticatedClientUseCase = container.resolve(
      AuthenticateUserUseCase
    );

    const result = await authenticatedClientUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
