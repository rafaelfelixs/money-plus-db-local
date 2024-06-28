import express, { NextFunction, Request, Response } from 'express';
import { userCreateController, userListController, userUpdateController } from './index';

const routerUsers = express.Router();

routerUsers.post('/v1/users', (req: Request, res: Response, next: NextFunction) => {
  return userCreateController.handle(req, res, next);
});

routerUsers.get('/v1/users', (req: Request, res: Response, next: NextFunction) => {
  return userListController.handle(req, res, next);
});

routerUsers.put('/v1/user/:id', (req: Request, res: Response, next: NextFunction) => {
  return userUpdateController.handle(req, res, next);
});

export { routerUsers };
