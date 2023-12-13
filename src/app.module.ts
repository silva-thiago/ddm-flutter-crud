import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { ContactsModule } from './contacts/contacts.module';
import { TagsModule } from './tags/tags.module';
import { UsersPersonalDataModule } from './users_personal_data/users_personal_data.module';
import { UsersResidencialDataModule } from './users_residencial_data/users_residencial_data.module';
import { UsersHealthDataModule } from './users_health_data/users_health_data.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ContactsModule,
    TagsModule,
    UsersPersonalDataModule,
    UsersResidencialDataModule,
    UsersHealthDataModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
