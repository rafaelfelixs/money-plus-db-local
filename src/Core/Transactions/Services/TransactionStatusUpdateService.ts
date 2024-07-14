import { ITransactionStorage } from '../Storage/ITransactionStorage';
import { ResourceNotFoundException } from '../../../Api/Exception/ResourceNotFoundException';
import TransactionCreateHelper from '../Helpers/TransactionUpdateHelper';
import { UpdateTransactionStatusRequest } from '../Request/UpdateTransactionStatusRequest'; 

export class TransactionStatusUpdateService {
  constructor(private readonly storageTransaction: ITransactionStorage) {}

  public async invoke(request: UpdateTransactionStatusRequest): Promise<void> {
    const validatedRequest = await TransactionCreateHelper.validateStatusRequest(request);

    const transactionFound = await this.storageTransaction.findById(validatedRequest.transactionId);
    if (!transactionFound) {
      throw new ResourceNotFoundException('Transaction not found');
    }

    await this.storageTransaction.updateStatus(validatedRequest.transactionId, validatedRequest.status);
  }
}
