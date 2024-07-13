import { UserCreateResponse } from '../../Users/Response/UserCreateResponse';
import { CreateTransactionResponse } from './CreateTransactionResponse';

export interface UserTransactionResponse {
  user: UserCreateResponse;
  transactions: CreateTransactionResponse[];
}
