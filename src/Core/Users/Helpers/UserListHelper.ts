import { Users } from '../../../Infraestructure/Entities/Users';
import { UserListResponse } from '../Response/UserListResponse';

export default class UserListHelper {
  public static async buildResponse(users: Users[]): Promise<UserListResponse> {
    if (!users.length) {
      return {
        count: 0,
        items: [],
      };
    }

    return {
      count: users.length,
      items: users.map((user) => {
        return {
          userId: user.userId,
          userName: user.userName,
          email: user.email,
          createdAt: user.createdAt,
          transactions: user.transactions || [],
        };
      }),
    };
  }
}
