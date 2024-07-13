import { CreateTransactionResponse } from './CreateTransactionResponse';
import {UserTransactionResponse} from "./UserTransactionResponse";

export interface ListTransactionResponse {
  count: number;
  items: UserTransactionResponse[];
}
