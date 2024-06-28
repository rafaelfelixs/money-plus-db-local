import { NextFunction, Request, Response } from 'express';
import { UserListService } from '../Services/UserListService';
import UserListHelper from '../Helpers/UserListHelper';

export class UserListController {
  constructor(private readonly service: UserListService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const users = await this.service.invoke();
      const response = await UserListHelper.buildResponse(users);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
