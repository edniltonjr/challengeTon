import { prisma } from "../../../../database/prismaClient";

export class ProfileUserUseCase {
  async execute(id: string) {
    const user = await prisma.users.findFirst({
      where: {
        id,
      },
    });

    return user;
  }
}
