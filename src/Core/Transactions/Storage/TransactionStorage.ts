import { ITransactionStorage } from './ITransactionStorage';

import { prisma } from '../../Database/Prisma/PrismaConnection';
import { loggerError } from '../../../Api/Utils/Logger';
import { Transactions } from '../../../Infraestructure/Entities/Transactions';
import { User } from '@prisma/client';

export class TransactionStorage implements ITransactionStorage {
  public async delete(transactionId: string): Promise<void> {
    try {
      await prisma.transactions.delete({
        where: {
          id: transactionId,
        },
      });
    } catch (e) {
      loggerError(e);
    }
  }

  public async findAll(): Promise<any[]> {
    try {
      return await prisma.transactions.findMany();
    } catch (e) {
      loggerError(e);
    }
  }

  public async findById(transactionId: string): Promise<any> {
    try {
      return await prisma.transactions.findUnique({
        where: {
          id: transactionId,
        },
      });
    } catch (e) {
      loggerError(e);
    }
  }

  public async save(transaction: Transactions): Promise<any> {
    const { transactionId, description, amount, status, type, registeredAt, createdAt, userId } = transaction;
    try {
      return await prisma.transactions.create({
        data: {
          id: transactionId,
          description,
          type,
          amount: Number(amount),
          status,
          registeredAt,
          createdAt,
          User: {
              connect: {
                  id: userId,
              },
          },
        },
          include: {
            User: true,
          },
      });
    } catch (e) {
      loggerError(e);
    }
  }

  public async update(transaction: Transactions): Promise<any> {
    const { transactionId, description, amount, status, type, registeredAt, createdAt, userId } = transaction;
    try {
      return await prisma.transactions.update({
        where: {
          id: transactionId,
        },
        data: {
          description,
          type,
          amount,
          status,
          registeredAt,
        },
      });
    } catch (e) {
      loggerError(e);
    }
  }

  public async updateStatus(transactionId, status): Promise<any> {
    try {
      return await prisma.transactions.update({
        where: {
          id: transactionId,
        },
        data: {
          status,
        },
      });
    } catch (e) {
      loggerError(e);
    }
  }
}