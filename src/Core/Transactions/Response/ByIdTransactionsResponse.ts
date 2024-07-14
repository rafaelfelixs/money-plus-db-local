export interface ByIdTransactionsResponse {
  id?: string;
  transactionId?: string;
  description: string;
  type: string;
  amount: number;
  status: string;
  registeredAt: Date;
  createdAt: Date;
  userId: string;
}
