import { NextFunction, Request, Response } from 'express';
import { TransactionUpdateService } from '../Services/TransactionUpdateService';
import TransactionUpdateHelper from '../Helpers/TransactionUpdateHelper';

export class TransactionUpdateController {
  constructor(private readonly service: TransactionUpdateService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;
      const { description, type, status, amount } = req.body;
      const transaction = await TransactionUpdateHelper.validateRequest({ description, type, amount, status });
      await this.service.invoke(id, transaction);

      res.status(200).send('Transaction updated successfully');
    } catch (error) {
      next(error);
    }
  }
}
