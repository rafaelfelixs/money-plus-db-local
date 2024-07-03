import { Transactions } from './Transactions';

export interface Users {
  id?: string;
  userId?: string;
  userName: string;
  email: string;
  password?: string;
  createdAt?: Date;
  transactions?: Array<Transactions>;
}
