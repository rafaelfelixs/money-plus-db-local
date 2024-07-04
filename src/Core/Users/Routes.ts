import express, { NextFunction, Request, Response } from 'express';
import { userCreateController, userListController, userUpdateController, userGetByIdController, userDeleteController } from './index';

const routerUsers = express.Router();

routerUsers.post('/v1/users', (req: Request, res: Response, next: NextFunction) => {
  return userCreateController.handle(req, res, next);
});

routerUsers.get('/v1/users', (req: Request, res: Response, next: NextFunction) => {
  return userListController.handle(req, res, next);
});

routerUsers.put('/v1/users/:id', (req: Request, res: Response, next: NextFunction) => {
  return userUpdateController.handle(req, res, next);
});

routerUsers.get('/v1/users/:userId', (req: Request, res: Response, next: NextFunction) => {
  return userGetByIdController.handle(req, res, next);
});


routerUsers.delete('/v1/users/:userId', (req: Request, res: Response, next: NextFunction) => {
  return userDeleteController.handle(req, res, next);

});

export { routerUsers };
