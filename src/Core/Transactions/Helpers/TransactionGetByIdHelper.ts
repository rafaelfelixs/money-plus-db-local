import { Transactions } from '../../../Infraestructure/Entities/Transactions';
import { ByIdTransactionsResponse } from '../Response/ByIdTransactionsResponse';

export default class TransactionGetByIdHelper {
  public static buildResponse(transactions: Transactions): ByIdTransactionsResponse {
    if (!transactions) {
      return;
    }

    return {
      transactionId: transactions.id,
      description: transactions.description,
      type: transactions.type,
      amount: transactions.amount,
      status: transactions.status,
      registeredAt: transactions.registeredAt,
      createdAt: transactions.createdAt,
      userId: transactions.userId,
    };
  }
}
