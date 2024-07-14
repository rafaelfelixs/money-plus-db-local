import { userListController, userStorage, userGetByIdController } from '../index';
import { UserGetByIdService } from '../Services/UserGetByIdService';
import { NextFunction, Request, Response } from 'express';
import { UserStorage } from '../Storage/UserStorage';
import UserCreateHelper from "../Helpers/UserCreateHelper";
import UserGetByIdHelper from "../Helpers/UserGetByIdHelper";

export class UserGetByIdController {
    constructor(private readonly service: UserGetByIdService) { }

    public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { userId } = req.params;

        try {
            const user = await this.service.invoke(userId);
            if (user) {
                const response = await UserGetByIdHelper.buildResponse(user);
                res.status(200).json(response);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            next(error);
        }
    }
}
