import { IUserStorage } from '../../Users/Storage/IUserStorage';
import { ITransactionStorage } from '../Storage/ITransactionStorage';
import { ResourceNotFoundException } from '../../../Api/Exception/ResourceNotFoundException';
import { Transactions } from '../../../Infraestructure/Entities/Transactions';

export class TransactionDeleteService {
  constructor(
    
    private readonly storageTransaction: ITransactionStorage
  ) {}

  public async invoke(transaction:Transactions): Promise<void> {
   const teste = await this.storageTransaction.findAll()
    console.log("#######################################", teste )
    const transactionFound = await this.storageTransaction.findById(transaction.transactionId);
    if (!transactionFound) {
      throw new ResourceNotFoundException('Transaction not found');
    }

    
     return await this.storageTransaction.delete(transaction.transactionId);
  }
}
