import 'reflect-metadata';
import 'dotenv/config';
import { App } from './App';
import { ConnectServer } from './ConnectServer';
import { prismaConnection } from './Core/Database/Prisma/PrismaConnection';

const start = async () => {
  await prismaConnection();
  const connectServer = new ConnectServer(new App());
  connectServer.startServer();
};

start().then();
