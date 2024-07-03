import express, { NextFunction, Request, Response } from 'express';
import { transactionCreateController, transactionListController } from './index';

const routerTransactions = express.Router();

routerTransactions.post('/v1/transactions', (req: Request, res: Response, next: NextFunction) => {
  return transactionCreateController.handle(req, res, next);
});

routerTransactions.get('/v1/transactions', (req: Request, res: Response, next: NextFunction) => {
  return transactionListController.handle(req, res, next);
});

export { routerTransactions };
