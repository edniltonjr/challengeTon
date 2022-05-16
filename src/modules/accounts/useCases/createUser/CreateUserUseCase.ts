import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, email, password }: ICreateUser) {
    const userExist = await this.usersRepository.findByEmail(email);

    if (userExist) {
      throw new AppError("User already exists");
    }

    const hashPassword = await hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      name,
      password: hashPassword,
    });
    return user;
  }
}
