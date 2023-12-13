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
import { ContactsService } from './contacts.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@/auth/guards/guards.guard';

@UseGuards(AuthGuard)
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post('/create')
  create(@Body() createContactDto: Prisma.EmergencyContactCreateInput) {
    return this.contactsService.create(createContactDto);
  }

  @Get('/read')
  findAll() {
    return this.contactsService.findAll();
  }

  @Get('/read/:id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updateContactDto: Prisma.EmergencyContactUpdateInput,
  ) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
