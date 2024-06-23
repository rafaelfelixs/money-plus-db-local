import { Users } from '../../../Infraestructure/Entities/Users';
import { IUserStorage } from '../Storage/IUserStorage';
import { logger } from '../../../Api/Utils/Logger';
import { CODE_ERROR_RESOURCE_ALREADY_EXISTS } from '../../../Api/Exception/CodeErrors/CodeErrors';
import { ConflictAlreadyExistsException } from '../../../Api/Exception/ConflictAlreadyExistsException';

export class UserCreateService {
  constructor(private readonly storage: IUserStorage) {}

  public async invoke(user: Users): Promise<any> {
    // check if the user already exists
    const userFound = await this.storage.findByEmail(user.email);
    if (userFound) {
      logger.info('User already exists, found with email', user.email);
      throw new ConflictAlreadyExistsException(CODE_ERROR_RESOURCE_ALREADY_EXISTS);
    }

    const userNew = await this.storage.save(user);
    logger.info('User created successfully.');
    console.log(userNew)
    return userNew;
  }
}
