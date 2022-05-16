import "dotenv/config";
import jwt_decode from "jwt-decode";

import { UsersRepository } from "../../../../shared/infra/adapters/repositories/memory/users/UsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AuthenticateUserUseCase } from "../authenticateUser/AuthenticateUserUseCase";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ProfileUserUseCase } from "./ProfileUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepository;
let createUserUseCase: CreateUserUseCase;
let profileUserUseCase: ProfileUserUseCase;

describe("Show Profile", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepository();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    profileUserUseCase = new ProfileUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to show profile user authenticated", async () => {
    const user: ICreateUserDTO = {
      name: "Teste",
      email: "email@teste.com",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    const userAuthenticated = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    const { sub } = (await jwt_decode(userAuthenticated.token)) as any;

    const profile = await profileUserUseCase.execute(sub);

    expect(profile).toHaveProperty("id");
    expect(profile).toHaveProperty("name");
    expect(profile).toHaveProperty("email");
    expect(profile).toHaveProperty("password");
  });
});
