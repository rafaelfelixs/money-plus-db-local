import express, { NextFunction, Request, Response } from 'express';
import {userCreateController, userListController} from './index';

const routerUsers = express.Router();

routerUsers.post('/v1/users', (req: Request, res: Response, next: NextFunction) => {
  return userCreateController.handle(req, res, next);
});

routerUsers.get('/v1/users', (req: Request, res: Response, next: NextFunction) => {
    return userListController.handle(req, res, next)
})

routerUsers.get('/v1/users/:userId', (req: Request, res: Response, next: NextFunction) => {
    return userListController.handle(req, res, next)
})

export { routerUsers };
