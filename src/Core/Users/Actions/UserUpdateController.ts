import { NextFunction, Request, Response } from 'express';

import { UserUpdateService } from '../Services/UserUpdateService';

export class UserUpdateController {
  constructor(private readonly service: UserUpdateService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const userName = req.body;

      //TODO: Adicionar validação
      const updatedUser = await this.service.invoke(id, userName);

      res.status(200).send(updatedUser);
    } catch (error) {
      next(error);
    }
  }
}
