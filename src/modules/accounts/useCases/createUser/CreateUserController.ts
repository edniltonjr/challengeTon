import { Request, Response } from "express";

import UsersRepository from "../../../../shared/infra/adapters/repositories/database/prisma/users/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const usersRepository = new UsersRepository();

    const createClientUseCase = new CreateUserUseCase(usersRepository);
    const result = await createClientUseCase.execute({ name, email, password });

    return response.json(result);
  }
}
