import { Transactions } from '../../../Infraestructure/Entities/Transactions';

export interface UserCreateResponse {
  userId: string;
  userName: string;
  email: string;
  createdAt: Date;
  transactions?: Array<Transactions>;
}
