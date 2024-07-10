
import { UserStorage } from '../Users/Storage/UserStorage';
import { TransactionStorage } from './Storage/TransactionStorage';
import { TransactionCreateController } from './Actions/TransactionCreateController';
import { TransactionCreateService } from './Services/TransactionCreateService';
import { TransactionStatusUpdateController } from './Actions/TransactionStatusUpdateController';
import { TransactionStatusUpdateService } from './Services/TransactionStatusUpdateService';
import { TransactionDeleteController }  from './Actions/TransactionDeleteController'
import { TransactionDeleteService } from './Services/TransactionDeleteService';



export const userStorage = new UserStorage();
export const transactionStorage = new TransactionStorage();

export const transactionCreateController: TransactionCreateController = new TransactionCreateController(new TransactionCreateService(userStorage, transactionStorage));
export const transactionStatusUpdateController: TransactionStatusUpdateController = new TransactionStatusUpdateController(new TransactionStatusUpdateService(userStorage, transactionStorage)); 
export const transactionDeleteController: TransactionDeleteController = new TransactionDeleteController(new TransactionDeleteService(userStorage, transactionStorage)); 
