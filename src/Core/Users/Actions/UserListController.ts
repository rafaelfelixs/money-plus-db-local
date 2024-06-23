import { NextFunction, Request, Response } from 'express';
import {UserListService} from "../Services/UserListService";

export class UserListController {
  constructor(private readonly service: UserListService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.service.invoke();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }
}
