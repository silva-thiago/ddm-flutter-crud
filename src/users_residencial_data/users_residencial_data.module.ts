import { Module } from '@nestjs/common';
import { UsersResidencialDataService } from './users_residencial_data.service';
import { UsersResidencialDataController } from './users_residencial_data.controller';
import { CommonModule } from '@/common/common.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [AuthModule, CommonModule],
  controllers: [UsersResidencialDataController],
  providers: [UsersResidencialDataService],
})
export class UsersResidencialDataModule {}
