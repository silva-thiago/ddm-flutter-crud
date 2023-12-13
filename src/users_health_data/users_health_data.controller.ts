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
import { UsersHealthDataService } from './users_health_data.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@/auth/guards/guards.guard';

@UseGuards(AuthGuard)
@Controller('users-health-data')
export class UsersHealthDataController {
  constructor(
    private readonly usersHealthDataService: UsersHealthDataService,
  ) {}

  @Post('/create')
  create(@Body() createUsersHealthDataDto: Prisma.UserHealthDataCreateInput) {
    return this.usersHealthDataService.create(createUsersHealthDataDto);
  }

  @Get('/read')
  findAll() {
    return this.usersHealthDataService.findAll();
  }

  @Get('/read/:id')
  findOne(@Param('id') id: string) {
    return this.usersHealthDataService.findOne(id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updateUsersHealthDataDto: Prisma.UserHealthDataUpdateInput,
  ) {
    return this.usersHealthDataService.update(id, updateUsersHealthDataDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersHealthDataService.remove(id);
  }
}
