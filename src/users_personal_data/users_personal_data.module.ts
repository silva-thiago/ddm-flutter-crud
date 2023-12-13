import { Module } from '@nestjs/common';
import { UsersPersonalDataService } from './users_personal_data.service';
import { UsersPersonalDataController } from './users_personal_data.controller';
import { CommonModule } from '@/common/common.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [AuthModule, CommonModule],
  controllers: [UsersPersonalDataController],
  providers: [UsersPersonalDataService],
})
export class UsersPersonalDataModule {}
