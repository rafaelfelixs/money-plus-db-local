import { UserStorage } from '../Users/Storage/UserStorage';
import { TransactionStorage } from './Storage/TransactionStorage';
import { TransactionCreateController } from './Actions/TransactionCreateController';
import { TransactionCreateService } from './Services/TransactionCreateService';
import { TransactionByIdController } from './Actions/TransactionByIdController';
import { TransactionByIdService } from './Services/TransactionByIdService ';
import { TransactionUpdateController } from './Actions/TransactionUpdateController';
import { TransactionUpdateService } from './Services/TransactionUpdateService';
import { TransactionListController } from './Actions/TransactionListController';
import { TransactionListService } from './Services/TransactionListService';
import { TransactionStatusUpdateController } from './Actions/TransactionStatusUpdateController';
import { TransactionStatusUpdateService } from './Services/TransactionStatusUpdateService';
import { TransactionDeleteController } from './Actions/TransactionDeleteController';
import { TransactionDeleteService } from './Services/TransactionDeleteService';

export const userStorage = new UserStorage();
export const transactionStorage = new TransactionStorage();

export const transactionCreateController: TransactionCreateController = new TransactionCreateController(new TransactionCreateService(userStorage, transactionStorage));
export const transactionByIdController: TransactionByIdController = new TransactionByIdController(new TransactionByIdService(transactionStorage));
export const transactionUpdateController: TransactionUpdateController = new TransactionUpdateController(new TransactionUpdateService(transactionStorage));
export const transactionListController: TransactionListController = new TransactionListController(new TransactionListService(userStorage, transactionStorage));
export const transactionStatusUpdateController: TransactionStatusUpdateController = new TransactionStatusUpdateController(new TransactionStatusUpdateService(transactionStorage));
export const transactionDeleteController: TransactionDeleteController = new TransactionDeleteController(new TransactionDeleteService(transactionStorage));
