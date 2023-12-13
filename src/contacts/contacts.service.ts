import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createContactDto: Prisma.EmergencyContactCreateInput) {
    return this.prisma.emergencyContact.create({ data: createContactDto });
  }

  findAll() {
    return this.prisma.emergencyContact.findMany();
  }

  findOne(id: string) {
    return this.prisma.emergencyContact.findUnique({ where: { id: id } });
  }

  update(id: string, updateContactDto: Prisma.EmergencyContactUpdateInput) {
    return this.prisma.emergencyContact.update({
      data: updateContactDto,
      where: { id: id },
    });
  }

  remove(id: string) {
    return this.prisma.emergencyContact.delete({ where: { id: id } });
  }
}
