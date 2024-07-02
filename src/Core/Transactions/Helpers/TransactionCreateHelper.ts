import { loggerError } from '../../../Api/Utils/Logger';
import { BadRequestException } from '../../../Api/Exception/BadRequestException';
import { CODE_ERROR_FIELDS_INVALID } from '../../../Api/Exception/CodeErrors/CodeErrors';
import { CreateTransactionRequest } from '../Request/CreateTransactionRequest';
import { Transactions } from '../../../Infraestructure/Entities/Transactions';
import { TypeTransactionEnum } from '../Enum/TypeTransactionEnum';
import { StatusTransactionEnum } from '../Enum/StatusTransactionEnum';
import { randomUUID } from 'node:crypto';
import { CreateTransactionResponse } from '../Response/CreateTransactionResponse';

export default class TransactionCreateHelper {
  public static async validateRequest(request: CreateTransactionRequest): Promise<Transactions> {
    // check if the mandatory fields exists
    if (!request.description || !request.type || !request.amount || !request.status || !request.userId) {
      loggerError('Mandatory fields description, type, amount, status, userId');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

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

    // check if the description is valid
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
      transactionId: randomUUID(),
      description: request.description,
      type: request.type,
      amount: request.amount,
      status: request.status,
      createdAt: new Date(),
      registeredAt: null,
      userId: request.userId,
    };
  }

  public static validRegisterDate(status: string) {
    return status === StatusTransactionEnum.done ? new Date() : null;
  }

  public static buildResponse(transaction: Transactions): CreateTransactionResponse {
    return {
      transactionId: transaction.transactionId,
      description: transaction.description,
      type: transaction.type,
      amount: transaction.amount,
      status: transaction.status,
      createdAt: String(transaction.createdAt),
      registeredAt: String(transaction.registeredAt),
      User: {
        userId: transaction.userId,
        userName: transaction.User.userName,
        email: transaction.User.email,
        createdAt: String(transaction.User.createdAt),
      },
    };
  }
}
