import { ICreateUserDTO } from "../../../../../../modules/accounts/dtos/ICreateUserDTO";
import User from "../../../../../../modules/accounts/entities/User";
import { IUsersRepository } from "../../../../../../modules/accounts/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = new User({
      name,
      email,
      password,
    });

    Object.assign(user, {
      name,
      email,
      password,
    });

    this.users.push(user);

    return user;
  }
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }
}

export { UsersRepository };
