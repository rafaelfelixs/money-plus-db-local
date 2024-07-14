import { UserStorage } from '../Users/Storage/UserStorage';
import { TransactionStorage } from './Storage/TransactionStorage';
import { TransactionCreateController } from './Actions/TransactionCreateController';
import { TransactionCreateService } from './Services/TransactionCreateService';
import { TransactionListController } from './Actions/TransactionListController';
import { TransactionListService } from './Services/TransactionListService';
import { TransactionStatusUpdateController } from './Actions/TransactionStatusUpdateController';
import { TransactionStatusUpdateService } from './Services/TransactionStatusUpdateService';
import { TransactionDeleteController } from './Actions/TransactionDeleteController';
import { TransactionDeleteService } from './Services/TransactionDeleteService';

export const userStorage = new UserStorage();
export const transactionStorage = new TransactionStorage();

export const transactionCreateController: TransactionCreateController = new TransactionCreateController(new TransactionCreateService(userStorage, transactionStorage));
export const transactionListController: TransactionListController = new TransactionListController(new TransactionListService(userStorage, transactionStorage));
export const transactionStatusUpdateController: TransactionStatusUpdateController = new TransactionStatusUpdateController(new TransactionStatusUpdateService(transactionStorage));
export const transactionDeleteController: TransactionDeleteController = new TransactionDeleteController(new TransactionDeleteService(transactionStorage));
