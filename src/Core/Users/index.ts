import { UserCreateController } from './Actions/UserCreateController';
import { UserCreateService } from './Services/UserCreateService';
import { UserStorage } from './Storage/UserStorage';
import {UserListController} from "./Actions/UserListController";
import {UserListService} from "./Services/UserListService";

export const userStorage = new UserStorage();

export const userCreateController: UserCreateController = new UserCreateController(new UserCreateService(userStorage));

export const userListController: UserListController = new UserListController(new UserListService(userStorage));
