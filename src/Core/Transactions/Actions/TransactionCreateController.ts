import { NextFunction, Request, Response } from 'express';
import { TransactionCreateService } from '../Services/TransactionCreateService';
import TransactionCreateHelper from '../Helpers/TransactionCreateHelper';

export class TransactionCreateController {
  constructor(private readonly service: TransactionCreateService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { description, type, amount, status, userId } = req.body;
      const transaction = await TransactionCreateHelper.validateRequest({ description, type, amount, status, userId });
      const transactionNew = await this.service.invoke(transaction);
      const response = TransactionCreateHelper.buildResponse(transactionNew);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
