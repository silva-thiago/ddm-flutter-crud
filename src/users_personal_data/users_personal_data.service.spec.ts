import { Test, TestingModule } from '@nestjs/testing';
import { UsersPersonalDataService } from './users_personal_data.service';

describe('UsersPersonalDataService', () => {
  let service: UsersPersonalDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersPersonalDataService],
    }).compile();

    service = module.get<UsersPersonalDataService>(UsersPersonalDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
