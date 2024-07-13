import { IUserStorage } from "../Storage/IUserStorage";
import { logger } from "../../../Api/Utils/Logger";

export class UserGetByIdService {
    constructor(private readonly storage: IUserStorage) {}


    public async invoke(id: string): Promise<any> {
        const user = await this.storage.findById(id);
        logger.info('User found successfully.');
        return user;
    }
}