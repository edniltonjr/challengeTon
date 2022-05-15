import { Request, Response } from "express";

import UsersRepository from "../../../../shared/infra/adapters/repositories/database/prisma/users/UsersRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const usersRepository = new UsersRepository();

    const authenticatedClientUseCase = new AuthenticateUserUseCase(
      usersRepository
    );

    const result = await authenticatedClientUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
