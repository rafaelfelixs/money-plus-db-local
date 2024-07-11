import { ITransactionStorage } from '../Storage/ITransactionStorage';

export class TransactionByIdService {
  constructor(private readonly storageTransaction: ITransactionStorage) {}

  public async invoke(transactionId: string): Promise<any> {
    return await this.storageTransaction.findById(transactionId);
  }
}
