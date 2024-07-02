import { PrismaClient } from '@prisma/client';
import { logger, loggerError } from '../../../Api/Utils/Logger';

export const prisma = new PrismaClient({
  log: [
    {
      emit: 'stdout',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
});

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
