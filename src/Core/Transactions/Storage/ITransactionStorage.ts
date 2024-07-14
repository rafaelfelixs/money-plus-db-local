import { IStorage } from '../../../Infraestructure/Storage/IStorage';
import { Transactions } from '../../../Infraestructure/Entities/Transactions';
import { TransactionListQueryDto } from '../Dto/TransactionListQueryDto';

export interface ITransactionStorage extends IStorage<Transactions> {
  updateStatus(transactionId: string, status: string): Promise<Transactions>;
  findAllByFilter(queryDto: TransactionListQueryDto): Promise<Transactions[]>;
}
