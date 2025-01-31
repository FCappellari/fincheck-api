import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany<T extends Prisma.BankAccountFindManyArgs>(
    findManyData: Prisma.SelectSubset<T, Prisma.BankAccountFindManyArgs>,
  ) {
    return this.prismaService.bankAccount.findMany(findManyData);
  }

  findFirst(findFirstData: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstData);
  }

  create(createDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDto);
  }

  update(updateDto: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateDto);
  }

  delete(deleteDto: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteDto);
  }
}
