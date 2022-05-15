import { Request, Response } from "express";

import UsersRepository from "../../../../shared/infra/adapters/repositories/database/prisma/users/UsersRepository";
import { ProfileUserUseCase } from "./ProfileUserUseCase";

class ProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const usersRepository = new UsersRepository();

    const profileUserUseCase = new ProfileUserUseCase(usersRepository);

    const user = await profileUserUseCase.execute(id);

    return response.json(user);
  }
}

export { ProfileUserController };
