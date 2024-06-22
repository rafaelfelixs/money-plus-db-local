import { IUserStorage } from './IUserStorage';

import { prisma } from '../../Database/Prisma/PrismaConnection';
import { loggerError } from '../../../Api/Utils/Logger';
import { Users } from '../../../Infraestructure/Entities/Users';

export class UserStorage implements IUserStorage {
  public async delete(userId: string): Promise<void> {
    try {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });
    } catch (e) {
      loggerError(e);
    }
  }

  public async findAll(): Promise<any[]> {
    try {
      return await prisma.user.findMany();
    } catch (e) {
      loggerError(e);
    }
  }

  public async findById(userId: string): Promise<any> {
    try {
      return await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
    } catch (e) {
      loggerError(e);
    }
  }

  public async findByEmail(email: string): Promise<any> {
    try {
      return await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
    } catch (e) {
      loggerError(e);
    }
  }

  public async save(user: Users): Promise<any> {
    const { userId, userName, email, password, createdAt } = user;
    try {
      return await prisma.user.create({
        data: {
          id: userId,
          userName: userName,
          email: email,
          password: password,
          createdAt: createdAt,
        },
      });
    } catch (e) {
      loggerError(e);
    }
  }

  public async update(user: Users): Promise<any> {
    const { userName, email, password } = user;
    try {
      return await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          userName: userName,
          password: password,
        },
      });
    } catch (e) {
      loggerError(e);
    }
  }
}
