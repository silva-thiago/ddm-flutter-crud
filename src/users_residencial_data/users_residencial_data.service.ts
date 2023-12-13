import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class UsersResidencialDataService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUsersResidencialDataDto: Prisma.UserResidencialDataCreateInput) {
    return this.prisma.userResidencialData.create({
      data: createUsersResidencialDataDto,
    });
  }

  findAll() {
    return this.prisma.userResidencialData.findMany();
  }

  findOne(id: string) {
    return this.prisma.userResidencialData.findUnique({ where: { id: id } });
  }

  update(
    id: string,
    updateUsersResidencialDataDto: Prisma.UserResidencialDataUpdateInput,
  ) {
    return this.prisma.userResidencialData.update({
      data: updateUsersResidencialDataDto,
      where: { id: id },
    });
  }

  remove(id: string) {
    return this.prisma.userResidencialData.delete({ where: { id: id } });
  }
}
