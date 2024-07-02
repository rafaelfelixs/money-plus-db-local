import { Transactions } from '../../../Infraestructure/Entities/Transactions';

export interface UserCreateResponse {
  userId: string;
  userName: string;
  email: string;
  createdAt: string;
  transactions?: Array<Transactions>;
}
