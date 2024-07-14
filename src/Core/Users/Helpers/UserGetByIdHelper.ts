import { Users } from '../../../Infraestructure/Entities/Users';
import { UserCreateResponse } from '../Response/UserCreateResponse';

export default class UserGetByIdHelper {
  public static async buildResponse(user: Users): Promise<UserCreateResponse> {
    return {
      userId: user.id,
      userName: user.userName,
      email: user.email,
      createdAt: String(user.createdAt),
    };
  }
}
