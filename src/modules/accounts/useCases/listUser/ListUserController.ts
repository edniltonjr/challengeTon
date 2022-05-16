import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email } = request.query;
    console.log(id);

    const listUserUseCase = container.resolve(ListUserUseCase);

    const users = await listUserUseCase.execute({ id, email });

    return response.json(users);
  }
}

export { ListUserController };
