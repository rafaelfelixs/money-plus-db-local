import { UserStorage } from '../Users/Storage/UserStorage';
import { TransactionStorage } from './Storage/TransactionStorage';
import { TransactionCreateController } from './Actions/TransactionCreateController';
import { TransactionCreateService } from './Services/TransactionCreateService';
import { TransactionByIdController } from './Actions/TransactionByIdController';
import { TransactionByIdService } from './Services/TransactionByIdService ';

export const userStorage = new UserStorage();
export const transactionStorage = new TransactionStorage();

export const transactionCreateController: TransactionCreateController = new TransactionCreateController(new TransactionCreateService(userStorage, transactionStorage));
export const transactionByIdController: TransactionByIdController = new TransactionByIdController(new TransactionByIdService(transactionStorage));
