import { IUserStorage } from '../../Users/Storage/IUserStorage';
import { logger } from '../../../Api/Utils/Logger';
import { Transactions } from '../../../Infraestructure/Entities/Transactions';
import TransactionCreateHelper from '../Helpers/TransactionCreateHelper';
import { ITransactionStorage } from '../Storage/ITransactionStorage';
import { ResourceNotFoundException } from '../../../Api/Exception/ResourceNotFoundException';

export class TransactionCreateService {
  constructor(
    private readonly storageUser: IUserStorage,
    private readonly storageTransaction: ITransactionStorage,
  ) {}

  public async invoke(transaction: Transactions): Promise<any> {
    // check if the user exists

    const userFound = await this.storageUser.findById(transaction.userId);
    if (!userFound) {
      logger.info('User not exists, send a valid user id', transaction.userId);
      throw new ResourceNotFoundException('User not found');
    }

    // check the status of the transaction
    transaction.registeredAt = TransactionCreateHelper.validRegisterDate(transaction.status);

    const transactionNew = await this.storageTransaction.save(transaction);
    logger.info('User created successfully.');
    return transactionNew;
  }
}
