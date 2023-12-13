import { Test, TestingModule } from '@nestjs/testing';
import { UsersHealthDataService } from './users_health_data.service';

describe('UsersHealthDataService', () => {
  let service: UsersHealthDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersHealthDataService],
    }).compile();

    service = module.get<UsersHealthDataService>(UsersHealthDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
