import { Test, TestingModule } from '@nestjs/testing';
import { UsersResidencialDataService } from './users_residencial_data.service';

describe('UsersResidencialDataService', () => {
  let service: UsersResidencialDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResidencialDataService],
    }).compile();

    service = module.get<UsersResidencialDataService>(UsersResidencialDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
