import { UserCreateController } from './Actions/UserCreateController';
import { UserCreateService } from './Services/UserCreateService';
import { UserStorage } from './Storage/UserStorage';
import { UserListController} from "./Actions/UserListController";
import { UserListService} from "./Services/UserListService";
import { UserGetByIdController } from './Actions/UserGetByIdController';
import { UserGetByIdService } from './Services/UserGetByIdService';
import { UserDeleteController } from './Actions/UserDeleteController';
import { UserDeleteService } from './Services/UserDeleteService';

export const userStorage = new UserStorage();

export const userCreateController: UserCreateController = new UserCreateController(new UserCreateService(userStorage));

export const userListController: UserListController = new UserListController(new UserListService(userStorage));

export const userGetByIdController: UserGetByIdController = new UserGetByIdController(new UserGetByIdService(userStorage));

export const userDeleteController : UserDeleteController  = new UserDeleteController (new UserDeleteService(userStorage));



