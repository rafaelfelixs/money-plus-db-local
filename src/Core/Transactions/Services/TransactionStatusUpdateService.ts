import { ITransactionStorage } from '../Storage/ITransactionStorage';
import { ResourceNotFoundException } from '../../../Api/Exception/ResourceNotFoundException';

export class TransactionStatusUpdateService {
  constructor(private readonly storageTransaction: ITransactionStorage) {}

  public async invoke(transactionId: string, status: string): Promise<void> {
    const transactionFound = await this.storageTransaction.findById(transactionId);
    if (!transactionFound) {
      throw new ResourceNotFoundException('Transaction not found');
    }

    await this.storageTransaction.updateStatus(transactionId, status);
  }
}
