import { Test, TestingModule } from '@nestjs/testing';
import { UsersHealthDataController } from './users_health_data.controller';
import { UsersHealthDataService } from './users_health_data.service';

describe('UsersHealthDataController', () => {
  let controller: UsersHealthDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersHealthDataController],
      providers: [UsersHealthDataService],
    }).compile();

    controller = module.get<UsersHealthDataController>(UsersHealthDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
