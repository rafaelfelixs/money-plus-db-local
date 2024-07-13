import { NextFunction, Request, Response } from 'express';
import { TransactionDeleteService } from '../Services/TransactionDeleteService';

export class TransactionDeleteController {
  constructor(private readonly service: TransactionDeleteService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { transactionId } = req.params;
      await this.service.invoke(transactionId);
      res.status(200).send({ message: 'Transaction deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}
