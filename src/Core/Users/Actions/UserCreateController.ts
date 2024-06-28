import { NextFunction, Request, Response } from 'express';
import { UserCreateService } from '../Services/UserCreateService';
import UserCreateHelper from '../Helpers/UserCreateHelper';

export class UserCreateController {
  constructor(private readonly service: UserCreateService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { userName, email, password } = req.body;
      const user = await UserCreateHelper.validateRequest({ userName, email, password });
      const userNew = await this.service.invoke(user);
      const response = await UserCreateHelper.buildResponse(userNew);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
