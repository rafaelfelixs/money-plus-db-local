import { NextFunction, Request, Response } from 'express';
import { UserDeleteService } from '../Services/UserDeleteService';

export class UserDeleteController {
  constructor(private readonly service: UserDeleteService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { userId } = req.params;

    try {
      await this.service.invoke(userId);
      res.status(200).send('User deleted successfully');
    } catch (error) {
      next(error);
    }
  }
}
