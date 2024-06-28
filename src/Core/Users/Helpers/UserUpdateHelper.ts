import { Users } from '../../../Infraestructure/Entities/Users';
import { loggerError } from '../../../Api/Utils/Logger';
import { BadRequestException } from '../../../Api/Exception/BadRequestException';
import { CODE_ERROR_FIELDS_INVALID } from '../../../Api/Exception/CodeErrors/CodeErrors';
import { UserUpdateRequest } from '../Request/UserUpdateRequest';

export default class UserUpdateHelper {
  public static async validateRequest(request: UserUpdateRequest): Promise<Users> {
    // check if the mandatory fields exists
    if (!request.userName) {
      loggerError('Mandatory fields userName ');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    // check if the user name is valid
    const regexValidName = new RegExp('[A-Za-z]');
    if (!request.userName.match(regexValidName)) {
      loggerError('Name field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    //TODO: adicionar validação de senha

    const data = {
      ...request,
      userName: request.userName,
    };
    return data;
  }
}
