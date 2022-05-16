import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import User from "../entities/User";

interface IUsersRepository {
  list(id?: string, email?: string): Promise<User[] | []>;
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}

export { IUsersRepository };
