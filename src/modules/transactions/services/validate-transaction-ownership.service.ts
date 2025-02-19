import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(private readonly transactionRepo: TransactionsRepository) {}

  async validate(userId: string, transactionId: string) {
    const isOwner = await this.transactionRepo.findFirst({
      where: {
        userId,
        id: transactionId,
      },
    });

    if (!isOwner) throw new NotFoundException('Transaction not found.');
  }
}
