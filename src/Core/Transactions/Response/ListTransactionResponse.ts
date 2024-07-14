import { UserTransactionResponse } from './UserTransactionResponse';

export interface ListTransactionResponse {
  count: number;
  items: UserTransactionResponse[];
}
