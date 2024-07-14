import { IUserStorage } from '../Storage/IUserStorage';
import { logger } from '../../../Api/Utils/Logger';

export class UserDeleteService {
  constructor(private readonly storage: IUserStorage) {}

  public async invoke(id: string): Promise<void> {
    await this.storage.delete(id);
    logger.info('User deleted successfully.');
  }
}
