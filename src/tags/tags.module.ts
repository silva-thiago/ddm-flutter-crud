import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { CommonModule } from '@/common/common.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [AuthModule, CommonModule],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
