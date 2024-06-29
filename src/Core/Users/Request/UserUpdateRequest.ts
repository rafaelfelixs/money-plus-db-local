export interface UserUpdateRequest {
  userId: string;
  userName: string;
  email: string;
  password?: string;
}
