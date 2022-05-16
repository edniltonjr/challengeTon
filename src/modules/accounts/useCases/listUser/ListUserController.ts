import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserUseCase } from "./ListUserUseCase";

interface ISearchUser {
  id?: string;
  email?: string;
}

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email } = request.query;

    const listUserUseCase = container.resolve(ListUserUseCase);

    const users = await listUserUseCase.execute({ id, email } as ISearchUser);

    return response.json(users);
  }
}

export { ListUserController };
