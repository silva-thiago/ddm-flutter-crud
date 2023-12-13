import { Module } from '@nestjs/common';
import { UsersHealthDataService } from './users_health_data.service';
import { UsersHealthDataController } from './users_health_data.controller';
import { CommonModule } from '@/common/common.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [AuthModule, CommonModule],
  controllers: [UsersHealthDataController],
  providers: [UsersHealthDataService],
})
export class UsersHealthDataModule {}
