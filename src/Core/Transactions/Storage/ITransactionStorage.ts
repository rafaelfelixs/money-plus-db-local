import { IStorage } from '../../../Infraestructure/Storage/IStorage';
import {Transactions} from "../../../Infraestructure/Entities/Transactions";

export interface ITransactionStorage extends IStorage<Transactions> {
  updateStatus(transactionId: string, status: string): Promise<Transactions>;
}
