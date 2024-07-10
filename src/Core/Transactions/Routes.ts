import express, { NextFunction, Request, Response } from 'express';
import { transactionCreateController, transactionStatusUpdateController, transactionDeleteController } from './index';


const routerTransactions = express.Router();

routerTransactions.post('/v1/transactions', (req: Request, res: Response, next: NextFunction) => {
  return transactionCreateController.handle(req, res, next);
});

routerTransactions.put('/v1/transactions', (req: Request, res: Response, next: NextFunction) => {
  return transactionStatusUpdateController.handle(req, res, next);
});

routerTransactions.delete('/v1/transactions', (req: Request, res: Response, next: NextFunction) => {
  return transactionDeleteController.handle(req, res, next);
});

routerTransactions.get('/v1/transactions', (req: Request, res: Response, next: NextFunction) => {
  return res.send('entrei');
});

export { routerTransactions };
