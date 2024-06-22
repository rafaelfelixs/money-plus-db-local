import { UserCreateController } from './Actions/UserCreateController';
import { UserCreateService } from './Services/UserCreateService';
import { UserStorage } from './Storage/UserStorage';

export const userStorage = new UserStorage();

export const userCreateController: UserCreateController = new UserCreateController(new UserCreateService(userStorage));
