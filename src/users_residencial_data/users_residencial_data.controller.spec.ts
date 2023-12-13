import { Test, TestingModule } from '@nestjs/testing';
import { UsersResidencialDataController } from './users_residencial_data.controller';
import { UsersResidencialDataService } from './users_residencial_data.service';

describe('UsersResidencialDataController', () => {
  let controller: UsersResidencialDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersResidencialDataController],
      providers: [UsersResidencialDataService],
    }).compile();

    controller = module.get<UsersResidencialDataController>(UsersResidencialDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
