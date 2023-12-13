import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class UsersPersonalDataService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUsersPersonalDataDto: Prisma.UserPersonalDataCreateInput) {
    return this.prisma.userPersonalData.create({
      data: createUsersPersonalDataDto,
    });
  }

  findAll() {
    return this.prisma.userPersonalData.findMany();
  }

  findOne(id: string) {
    return this.prisma.userPersonalData.findUnique({ where: { id: id } });
  }

  update(
    id: string,
    updateUsersPersonalDataDto: Prisma.UserPersonalDataUpdateInput,
  ) {
    return this.prisma.userPersonalData.update({
      data: updateUsersPersonalDataDto,
      where: { id: id },
    });
  }

  remove(id: string) {
    return this.prisma.userPersonalData.delete({ where: { id: id } });
  }
}
