import { PrismaClient } from '@prisma/client';
import { logger, loggerError } from '../../../Api/Utils/Logger';

export const prisma = new PrismaClient();

export const prismaConnection = async () => {
  try {
    await prisma.$connect();
    logger.info('Database connected');
  } catch (e) {
    loggerError(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};
