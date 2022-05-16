import "dotenv/config";
import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepository } from "../../../../shared/infra/adapters/repositories/memory/users/UsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

let usersRepositoryInMemory: UsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create a User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepository();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user: ICreateUserDTO = {
      name: "Teste",
      email: "email@teste.com",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    const userCreated = await usersRepositoryInMemory.findByEmail(user.email);

    expect(userCreated).toHaveProperty("id");
  });

  it("should not be able to create a new user with email exits", async () => {
    const user: ICreateUserDTO = {
      name: "Teste",
      email: "email@teste.com",
      password: "1234",
    };
    await createUserUseCase.execute(user);

    await expect(
      createUserUseCase.execute({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    ).rejects.toEqual(new AppError("User already exists"));
  });
});
