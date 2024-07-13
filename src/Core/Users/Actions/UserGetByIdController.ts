import { userListController, userStorage, userGetByIdController } from '../index';
import { UserGetByIdService } from '../Services/UserGetByIdService';
import { NextFunction, Request, Response } from 'express';
import { UserStorage } from '../Storage/UserStorage';

export class UserGetByIdController {
    constructor(private readonly service: UserGetByIdService) { }

    public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { userId } = req.params;
        
        try {
            const user = await this.service.invoke(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            next(error);
        }
    }
}