import { NextFunction, Request, Response } from 'express';
import { TransactionByIdService } from '../Services/TransactionByIdService ';
import TransactionGetByIdHelper from '../Helpers/TransactionGetByIdHelper';

export class TransactionByIdController {
  constructor(private readonly service: TransactionByIdService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;
      const transaction = await this.service.invoke(id);

      if (!transaction) {
        res.status(404).send('Transaction not found');
        return;
      }

      const response = TransactionGetByIdHelper.buildResponse(transaction);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
