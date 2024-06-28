import { UserCreateResponse } from './UserCreateResponse';

export interface UserListResponse {
  count: number;
  items: UserCreateResponse[];
}
