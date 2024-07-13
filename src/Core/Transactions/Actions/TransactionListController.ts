import { NextFunction, Request, Response } from 'express';
import { TransactionListService } from '../Services/TransactionListService';
import TransactionListHelper from '../Helpers/TransactionListHelper';

export class TransactionListController {
  constructor(private readonly service: TransactionListService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { type, status, userId } = req.query;
      await TransactionListHelper.validateQuery(type, status, userId);
      const transactionList = await this.service.invoke({ type, status, userId });
      const response = TransactionListHelper.buildResponse(transactionList);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
