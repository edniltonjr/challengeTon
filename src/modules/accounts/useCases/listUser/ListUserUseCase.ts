import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ISearchUser {
  id?: string;
  email?: string;
}

@injectable()
export class ListUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ id, email }: ISearchUser) {
    console.log(id, "id");
    const users = await this.usersRepository.list(id, email);

    return users;
  }
}
