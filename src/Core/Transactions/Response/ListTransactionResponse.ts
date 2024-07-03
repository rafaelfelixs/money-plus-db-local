import { CreateTransactionResponse } from './CreateTransactionResponse';

export interface ListTransactionResponse {
  count: number;
  items: CreateTransactionResponse[];
}
