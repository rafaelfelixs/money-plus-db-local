import { IUserStorage } from '../../Users/Storage/IUserStorage';
import { logger } from '../../../Api/Utils/Logger';
import { ITransactionStorage } from '../Storage/ITransactionStorage';
import { ResourceNotFoundException } from '../../../Api/Exception/ResourceNotFoundException';
import { TransactionListQueryDto } from '../Dto/TransactionListQueryDto';

export class TransactionListService {
  constructor(
    private readonly storageUser: IUserStorage,
    private readonly storageTransaction: ITransactionStorage,
  ) {}

  public async invoke(queryDto: TransactionListQueryDto): Promise<any> {
    if (!queryDto.type && !queryDto.status && !queryDto.userId) {
      logger.info('Searching all transactions successfully.');
      return await this.storageTransaction.findAll();
    }

    if (queryDto.userId) {
      // check if the user exists
      const user = await this.storageUser.findById(queryDto.userId);
      if (!user) {
        logger.info('User not exists, send a valid user id', queryDto.userId);
        throw new ResourceNotFoundException('User not found');
      }
    }

    const transactions = await this.storageTransaction.findAllByFilter(queryDto);
    logger.info('Transactions found successfully.');
    return transactions;
  }
}
