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
import { UsersResidencialDataService } from './users_residencial_data.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@/auth/guards/guards.guard';

@UseGuards(AuthGuard)
@Controller('users-residencial-data')
export class UsersResidencialDataController {
  constructor(
    private readonly usersResidencialDataService: UsersResidencialDataService,
  ) {}

  @Post('/create')
  create(
    @Body()
    createUsersResidencialDataDto: Prisma.UserResidencialDataCreateInput,
  ) {
    return this.usersResidencialDataService.create(
      createUsersResidencialDataDto,
    );
  }

  @Get('/read')
  findAll() {
    return this.usersResidencialDataService.findAll();
  }

  @Get('/read/:id')
  findOne(@Param('id') id: string) {
    return this.usersResidencialDataService.findOne(id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body()
    updateUsersResidencialDataDto: Prisma.UserResidencialDataUpdateInput,
  ) {
    return this.usersResidencialDataService.update(
      id,
      updateUsersResidencialDataDto,
    );
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersResidencialDataService.remove(id);
  }
}
