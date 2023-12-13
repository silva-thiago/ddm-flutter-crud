import { Test, TestingModule } from '@nestjs/testing';
import { UsersPersonalDataController } from './users_personal_data.controller';
import { UsersPersonalDataService } from './users_personal_data.service';

describe('UsersPersonalDataController', () => {
  let controller: UsersPersonalDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersPersonalDataController],
      providers: [UsersPersonalDataService],
    }).compile();

    controller = module.get<UsersPersonalDataController>(UsersPersonalDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
