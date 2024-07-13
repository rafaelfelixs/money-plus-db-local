import { NextFunction, Request, Response } from 'express';
import { TransactionStatusUpdateService } from '../Services/TransactionStatusUpdateService';

export class TransactionStatusUpdateController {
  constructor(private readonly service: TransactionStatusUpdateService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const {transactionId} = req.params
      const { status } = req.body;
      await this.service.invoke(transactionId, status);
      res.status(200).send({ message: 'Transaction status updated successfully' });
    } catch (error) {
      next(error);
    }
  }
}
