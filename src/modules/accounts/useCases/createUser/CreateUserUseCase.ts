import { hash } from "bcrypt";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: ICreateUser) {
    const userExist = await this.usersRepository.findByEmail(email);

    if (userExist) {
      throw new Error("User already exists");
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
