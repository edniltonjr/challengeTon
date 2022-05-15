import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ProfileUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id);
    return user;
  }
}
