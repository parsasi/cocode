import { Test, TestingModule } from '@nestjs/testing';
import { CodeJarService } from './code-jar.service';

describe('CodeJarService', () => {
  let service: CodeJarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeJarService],
    }).compile();

    service = module.get<CodeJarService>(CodeJarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
