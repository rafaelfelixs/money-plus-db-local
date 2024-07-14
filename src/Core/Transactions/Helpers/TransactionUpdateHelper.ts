import { UpdateTransactionStatusRequest } from './../Request/UpdateTransactionStatusRequest';
import { loggerError } from '../../../Api/Utils/Logger';
import { BadRequestException } from '../../../Api/Exception/BadRequestException';
import { CODE_ERROR_FIELDS_INVALID } from '../../../Api/Exception/CodeErrors/CodeErrors';
import { StatusTransactionEnum } from '../Enum/StatusTransactionEnum';



export default class TransactionUpdateHelper {
        public static async validateStatusRequest(request: UpdateTransactionStatusRequest): Promise<UpdateTransactionStatusRequest> {
            if ( !request.transactionId || !request.status) {
                loggerError(' Mandatory fields transactionId and status are missing');
                throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
            }

            if (!Object.values(StatusTransactionEnum).includes(request.status)) {

                loggerError('Field status is not valid');

                throw new BadRequestException(CODE_ERROR_FIELDS_INVALID);
            }

            return request;
        }
}