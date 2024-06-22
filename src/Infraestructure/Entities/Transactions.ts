export interface Transactions {
  transactionId: string;
  description: string;
  type: string;
  amount: number;
  status: string;
  registeredAt: Date;
  createdAt: Date;
  userId: string;
}
