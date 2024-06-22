import { Transactions } from './Transactions';

export interface Users {
  userId: string;
  userName: string;
  email: string;
  password?: string;
  createdAt?: string;
  transactions?: Array<Transactions>;
}
