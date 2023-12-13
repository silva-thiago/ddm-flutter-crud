import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class UsersHealthDataService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUsersHealthDataDto: Prisma.UserHealthDataCreateInput) {
    return this.prisma.userHealthData.create({
      data: createUsersHealthDataDto,
    });
  }

  findAll() {
    return this.prisma.userHealthData.findMany();
  }

  findOne(id: string) {
    return this.prisma.userHealthData.findUnique({ where: { id: id } });
  }

  update(
    id: string,
    updateUsersHealthDataDto: Prisma.UserHealthDataUpdateInput,
  ) {
    return this.prisma.userHealthData.update({
      data: updateUsersHealthDataDto,
      where: { id: id },
    });
  }

  remove(id: string) {
    return this.prisma.userHealthData.delete({ where: { id: id } });
  }
}
