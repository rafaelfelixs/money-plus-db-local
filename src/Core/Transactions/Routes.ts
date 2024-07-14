import express, { NextFunction, Request, Response } from 'express';
import { transactionCreateController, transactionStatusUpdateController, transactionDeleteController, transactionListController } from './index';

const routerTransactions = express.Router();

routerTransactions.post('/v1/transactions', (req: Request, res: Response, next: NextFunction) => {
  return transactionCreateController.handle(req, res, next);
});

routerTransactions.get('/v1/transactions', (req: Request, res: Response, next: NextFunction) => {
  return transactionListController.handle(req, res, next);
});

routerTransactions.patch('/v1/transactions/:transactionId', (req: Request, res: Response, next: NextFunction) => {
  return transactionStatusUpdateController.handle(req, res, next);
});

routerTransactions.delete('/v1/transactions/:transactionId', (req: Request, res: Response, next: NextFunction) => {
  return transactionDeleteController.handle(req, res, next);
});

export { routerTransactions };
