import { TypeTransactionEnum } from '../Enum/TypeTransactionEnum';
import { StatusTransactionEnum } from '../Enum/StatusTransactionEnum';

export interface CreateTransactionRequest {
  description: string;
  type: TypeTransactionEnum;
  amount: number;
  status: StatusTransactionEnum;
  userId: string;
}
