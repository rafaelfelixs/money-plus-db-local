import { CODE_ERROR_RESOURCE_NOT_FOUND } from '../../../Api/Exception/CodeErrors/CodeErrors';
import { ResourceNotFoundException } from '../../../Api/Exception/ResourceNotFoundException';
import { logger } from '../../../Api/Utils/Logger';
import { Users } from '../../../Infraestructure/Entities/Users';
import { IUserStorage } from '../Storage/IUserStorage';

export class UserUpdateService {
  constructor(private readonly storage: IUserStorage) {}

  public async invoke(userId: string, user: Users): Promise<any> {
    const users = await this.storage.findAll();

    const userFound = users.find((usr) => usr.id === userId);

    if (!userFound) {
      logger.info('User not found');
      throw new ResourceNotFoundException(CODE_ERROR_RESOURCE_NOT_FOUND.message);
    }
    const updatedUser = await this.storage.update(userId, user);
    logger.info('User updated successfully');

    return updatedUser;
  }
}
