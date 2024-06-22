export interface UserCreateResponse {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  transactions: Array<any>;
}
