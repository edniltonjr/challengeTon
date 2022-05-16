import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class ProfileUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute(id: string) {
    const user = await this.usersRepository.findById(id);
    if (!user) throw new AppError("User Not found");
    return user;
  }
}
