import { loggerError } from '../../../Api/Utils/Logger';
import { BadRequestException } from '../../../Api/Exception/BadRequestException';
import { CODE_ERROR_FIELDS_INVALID } from '../../../Api/Exception/CodeErrors/CodeErrors';
import { Transactions } from '../../../Infraestructure/Entities/Transactions';
import { TypeTransactionEnum } from '../Enum/TypeTransactionEnum';
import { UpdateTransactionRequest } from '../Request/UpdateTransactionRequest';
import { StatusTransactionEnum } from '../Enum/StatusTransactionEnum';

export default class TransactionUpdateHelper {
  public static async validateRequest(request: UpdateTransactionRequest): Promise<Partial<Transactions>> {
    // check if the description is valid
    const regexValidDescription = new RegExp('[A-Za-z]');
    if (!request.description.match(regexValidDescription) || request.description.length > 50) {
      loggerError('Description field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    // check if the type is valid
    if (!TypeTransactionEnum[request.type]) {
      loggerError('Type field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    // check if the amount is valid
    const regexValidAmount = new RegExp('^[0-9]*(\\.[0-9]{0,2})?$');
    if (!String(request.amount).match(regexValidAmount)) {
      loggerError('Amount field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    // check if the status is valid
    if (!StatusTransactionEnum[request.status]) {
      loggerError('Status field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    return {
      description: request.description,
      type: request.type,
      amount: request.amount,
      status: request.status,
    };
  }
}
