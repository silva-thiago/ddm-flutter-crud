import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { CommonModule } from '@/common/common.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [AuthModule, CommonModule],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
