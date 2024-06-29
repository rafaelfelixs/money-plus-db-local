import { NextFunction, Request, Response } from 'express';

import { UserUpdateService } from '../Services/UserUpdateService';
import UserUpdateHelper from '../Helpers/UserUpdateHelper';
import { Users } from '../../../Infraestructure/Entities/Users';

export class UserUpdateController {
  constructor(private readonly service: UserUpdateService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const userName: Users = req.body;

      const user = await UserUpdateHelper.validateRequest(userName);
      const updatedUser = await this.service.invoke(id, user);

      res.status(200).send(updatedUser);
    } catch (error) {
      next(error);
    }
  }
}
