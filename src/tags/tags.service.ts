import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class TagsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTagDto: Prisma.TagCreateInput) {
    return this.prisma.tag.create({ data: createTagDto });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  findOne(id: string) {
    return this.prisma.tag.findUnique({ where: { id: id } });
  }

  update(id: string, updateTagDto: Prisma.TagUpdateInput) {
    return this.prisma.tag.update({ data: updateTagDto, where: { id: id } });
  }

  remove(id: string) {
    return this.prisma.tag.delete({ where: { id: id } });
  }
}
