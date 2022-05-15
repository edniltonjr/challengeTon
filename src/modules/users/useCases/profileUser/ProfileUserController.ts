import { Request, Response } from "express";

import { ProfileUserUseCase } from "./ProfileUserUseCase";

class ProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const profileUserUseCase = new ProfileUserUseCase();

    const user = await profileUserUseCase.execute(id);

    return response.json(user);
  }
}

export { ProfileUserController };
