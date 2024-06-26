import { NextFunction, Request, Response } from 'express';

import { UserUpdateService } from '../Services/UserUpdateService';
import { Users } from '../../../Infraestructure/Entities/Users';

export class UserUpdateController {
  constructor(private readonly service: UserUpdateService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.param;
      const user: Users = req.body;
      if (user.userName) {
        const updatedUser = await this.service.invoke(id, {
          ...user,
          userName: user.userName,
        });
        res.status(200).send(updatedUser);
      }
    } catch (error) {
      next(error);
    }
  }
}
