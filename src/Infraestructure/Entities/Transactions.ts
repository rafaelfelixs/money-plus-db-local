import { Users } from './Users';

export interface Transactions {
  id?: string;
  transactionId?: string;
  description: string;
  type: string;
  amount: number;
  status: string;
  registeredAt: Date;
  createdAt: Date;
  userId: string;
  User?: Users;
}
