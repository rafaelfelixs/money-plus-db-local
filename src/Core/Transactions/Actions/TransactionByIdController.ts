import { NextFunction, Request, Response } from 'express';
import { TransactionByIdService } from '../Services/TransactionByIdService ';

export class TransactionByIdController {
  constructor(private readonly service: TransactionByIdService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;

      const transaction = await this.service.invoke(id);

      res.status(200).send(transaction);
    } catch (error) {
      next(error);
    }
  }
}
