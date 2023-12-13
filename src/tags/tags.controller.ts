import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@/auth/guards/guards.guard';

@UseGuards(AuthGuard)
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('/create')
  create(@Body() createTagDto: Prisma.TagCreateInput) {
    return this.tagsService.create(createTagDto);
  }

  @Get('/read')
  findAll() {
    return this.tagsService.findAll();
  }

  @Get('/read/:id')
  findOne(@Param('id') id: string) {
    return this.tagsService.findOne(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateTagDto: Prisma.TagUpdateInput) {
    return this.tagsService.update(id, updateTagDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.tagsService.remove(id);
  }
}
