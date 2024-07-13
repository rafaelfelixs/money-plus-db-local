import { Users } from './Users';

export interface Transactions {
  id(arg0: string, id: any): unknown;
  transactionId: string;
  description: string;
  type: string;
  amount: number;
  status: string;
  registeredAt: Date;
  createdAt: Date;
  userId: string;
  User?: Users;
}
