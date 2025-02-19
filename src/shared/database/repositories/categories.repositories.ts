import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyData: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findManyData);
  }

  findFirst(findFirstData: Prisma.CategoryFindFirstArgs) {
    return this.prismaService.category.findFirst(findFirstData);
  }
}
