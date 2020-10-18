import { Test, TestingModule } from '@nestjs/testing';
import { AttendService } from './attend.service';

describe('AttendService', () => {
  let service: AttendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendService],
    }).compile();

    service = module.get<AttendService>(AttendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
