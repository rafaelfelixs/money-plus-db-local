import { UserCreateResponse } from '../../Users/Response/UserCreateResponse';

export interface CreateTransactionResponse {
  transactionId: string;
  description: string;
  type: string;
  amount: number;
  status: string;
  registeredAt: string;
  createdAt: string;
  User?: UserCreateResponse;
}
