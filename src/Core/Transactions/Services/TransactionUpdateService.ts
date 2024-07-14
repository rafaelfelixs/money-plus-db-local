import { CODE_ERROR_RESOURCE_NOT_FOUND } from '../../../Api/Exception/CodeErrors/CodeErrors';
import { ResourceNotFoundException } from '../../../Api/Exception/ResourceNotFoundException';
import { logger } from '../../../Api/Utils/Logger';
import { Transactions } from '../../../Infraestructure/Entities/Transactions';
import { ITransactionStorage } from '../Storage/ITransactionStorage';

export class TransactionUpdateService {
  constructor(private readonly storageTransaction: ITransactionStorage) {}

  public async invoke(transactionId: string, transaction: Partial<Transactions>): Promise<any> {
    const transactionFound = await this.storageTransaction.findById(transactionId);

    if (!transactionFound) {
      logger.info('Transaction not found');
      throw new ResourceNotFoundException(CODE_ERROR_RESOURCE_NOT_FOUND.message);
    }

    const updateTransaction = await this.storageTransaction.update(transactionId, transaction);
    logger.info('Transaction updated successfully');

    return updateTransaction;
  }
}
