import express, { NextFunction, Request, Response } from 'express';
import { userCreateController } from './index';

const routerUsers = express.Router();

routerUsers.post('/v1/users', (req: Request, res: Response, next: NextFunction) => {
  return userCreateController.handle(req, res, next);
});

export { routerUsers };
