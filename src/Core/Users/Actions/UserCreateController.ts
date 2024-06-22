import { NextFunction, Request, Response } from 'express';
import { UserCreateService } from '../Services/UserCreateService';

export class UserCreateController {
  constructor(private readonly service: UserCreateService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const request = req.body;
      const dto = await this.service.invoke(request);
      res.status(200).send(dto);
    } catch (error) {
      next(error);
    }
  }
}
