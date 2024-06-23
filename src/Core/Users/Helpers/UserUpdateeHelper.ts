import { UserCreateRequest } from '../Request/UserCreateRequest';
import { Users } from '../../../Infraestructure/Entities/Users';
import { loggerError } from '../../../Api/Utils/Logger';
import { BadRequestException } from '../../../Api/Exception/BadRequestException';
import { CODE_ERROR_FIELDS_INVALID } from '../../../Api/Exception/CodeErrors/CodeErrors';
import { randomUUID } from 'node:crypto';

export default class UserCreateHelper {
  public static async validateRequest(request: UserCreateRequest): Promise<Users> {
    // check if the mandatory fields exists
    if (!request.userName || !request.email) {
      loggerError('Mandatory fields userName or email');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    // check if the user name is valid
    const regexValidName = new RegExp('[A-Za-z]');
    if (!request.userName.match(regexValidName)) {
      loggerError('Name field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    // check if the email is valid
    const regexValidEmail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    if (!request.email.match(regexValidEmail)) {
      loggerError('Email field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    return {
      userId: randomUUID(),
      userName: request.userName,
      email: request.email,
      password: null,
      createdAt: new Date(),
      transactions: [],
    };
  }
}
