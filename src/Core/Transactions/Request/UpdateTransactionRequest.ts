import { TypeTransactionEnum } from '../Enum/TypeTransactionEnum';
import { StatusTransactionEnum } from '../Enum/StatusTransactionEnum';

export interface UpdateTransactionRequest {
  description: string;
  type: TypeTransactionEnum;
  amount: number;
  status: StatusTransactionEnum;
}
