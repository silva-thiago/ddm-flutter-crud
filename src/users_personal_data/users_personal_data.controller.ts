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
import { UsersPersonalDataService } from './users_personal_data.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@/auth/guards/guards.guard';

@UseGuards(AuthGuard)
@Controller('users-personal-data')
export class UsersPersonalDataController {
  constructor(
    private readonly usersPersonalDataService: UsersPersonalDataService,
  ) {}

  @Post('/create')
  create(
    @Body() createUsersPersonalDataDto: Prisma.UserPersonalDataCreateInput,
  ) {
    return this.usersPersonalDataService.create(createUsersPersonalDataDto);
  }

  @Get('/read')
  findAll() {
    return this.usersPersonalDataService.findAll();
  }

  @Get('/read/:id')
  findOne(@Param('id') id: string) {
    return this.usersPersonalDataService.findOne(id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updateUsersPersonalDataDto: Prisma.UserPersonalDataUpdateInput,
  ) {
    return this.usersPersonalDataService.update(id, updateUsersPersonalDataDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersPersonalDataService.remove(id);
  }
}
