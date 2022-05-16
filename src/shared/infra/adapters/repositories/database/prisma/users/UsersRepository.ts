import { ICreateUserDTO } from "../../../../../../../modules/accounts/dtos/ICreateUserDTO";
import User from "../../../../../../../modules/accounts/entities/User";
import { IUsersRepository } from "../../../../../../../modules/accounts/repositories/IUsersRepository";
import { prisma } from "../../../../../database/prisma";

class UsersRepository implements IUsersRepository {
  async list(id?: string, email?: string): Promise<User[]> {
    const where = {
      id,
      email,
    };

    if (id) {
      where.id = id;
    }
    if (email) {
      where.email = email;
    }

    const users = await prisma.users.findMany({
      where,
    });
    return users;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = await prisma.users.create({
      data: { email, name, password },
    });
    return user;
  }
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await prisma.users.findFirst({
      where: { email },
    });

    if (!user) return undefined;

    return user;
  }
  async findById(id: string): Promise<User | undefined> {
    const user = await prisma.users.findFirst({
      where: { id },
    });

    if (!user) return undefined;

    return user;
  }
}

export default UsersRepository;
