import { IUserStorage } from '../Storage/IUserStorage';
import { logger } from '../../../Api/Utils/Logger';

export class UserListService {
  constructor(private readonly storage: IUserStorage) {}

  public async invoke(): Promise<any[]> {
    const users = await this.storage.findAll();
    logger.info('Users founds successfully.');
    return users;
  }
}
