import { loggerError } from '../../../Api/Utils/Logger';
import { BadRequestException } from '../../../Api/Exception/BadRequestException';
import { CODE_ERROR_FIELDS_INVALID } from '../../../Api/Exception/CodeErrors/CodeErrors';
import { TypeTransactionEnum } from '../Enum/TypeTransactionEnum';
import { StatusTransactionEnum } from '../Enum/StatusTransactionEnum';
import { Transactions } from '../../../Infraestructure/Entities/Transactions';
import { ListTransactionResponse } from '../Response/ListTransactionResponse';

export default class TransactionListHelper {
  public static async validateQuery(type, status, userId): Promise<void> {
    // check if the type is valid
    if (type && typeof type !== 'string' && !TypeTransactionEnum[type]) {
      loggerError('Type field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    // check if the status is valid
    if (status && typeof status !== 'string' && !StatusTransactionEnum[status]) {
      loggerError('Status field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }

    // check if the userId is valid
    const regexValidUuid = new RegExp('/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i');
    if (userId && typeof userId !== 'string' && String(userId).match(regexValidUuid)) {
      loggerError('UserId field is not valid');
      throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
    }
  }

  public static buildResponse(transactions: Transactions[]): ListTransactionResponse {
    if (transactions.length === 0) {
      return {
        count: 0,
        items: [],
      };
    }

    const listResponse: ListTransactionResponse = {
      count: transactions.length,
      items: [],
    };

    transactions.map((transaction) => {
      const foundUser = listResponse.items.findIndex((item) => item.user.userId === transaction.User.id);
      if (foundUser !== -1) {
        listResponse.items[foundUser].transactions.push({
          transactionId: transaction.id,
          description: transaction.description,
          type: transaction.type,
          amount: transaction.amount,
          status: transaction.status,
          createdAt: String(transaction.createdAt),
          registeredAt: String(transaction.registeredAt),
        });
      } else {
        listResponse.items.push({
          user: {
            userId: transaction.User.id,
            userName: transaction.User.userName,
            email: transaction.User.email,
            createdAt: String(transaction.User.createdAt),
          },
          transactions: [
            {
              transactionId: transaction.id,
              description: transaction.description,
              type: transaction.type,
              amount: transaction.amount,
              status: transaction.status,
              createdAt: String(transaction.createdAt),
              registeredAt: String(transaction.registeredAt),
            },
          ],
        });
      }
    });

    return listResponse;
  }
}
