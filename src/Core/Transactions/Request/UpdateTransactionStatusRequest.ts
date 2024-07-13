import { StatusTransactionEnum } from '../Enum/StatusTransactionEnum';

export interface UpdateTransactionStatusRequest {
  transactionId: string;
  status: StatusTransactionEnum;
}
