import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IAuthenticateUser) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ email }, process.env.SECRET_KEY as string, {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}
