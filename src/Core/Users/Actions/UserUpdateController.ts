import { NextFunction, Request, Response } from 'express';

import { UserUpdateService } from '../Services/UserUpdateService';
import UserUpdateHelper from '../Helpers/UserUpdateHelper';

export class UserUpdateController {
  constructor(private readonly service: UserUpdateService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { userName, userPassword } = req.body;

      const user = await UserUpdateHelper.validateRequest({ userName });
      await this.service.invoke(id, user);

      res.status(200).send('User updated successfully');
    } catch (error) {
      next(error);
    }
  }
}
