import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
      include: {
        emergencyContacts: true,
        userPersonalData: true,
        userResidencialData: true,
        userHealthData: true,
        tags: true,
      },
    });
  }

  update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ data: updateUserDto, where: { id: id } });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id: id } });
  }
}
