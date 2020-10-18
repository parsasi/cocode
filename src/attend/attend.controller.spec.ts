import { Test, TestingModule } from '@nestjs/testing';
import { AttendController } from './attend.controller';

describe('AttendController', () => {
  let controller: AttendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendController],
    }).compile();

    controller = module.get<AttendController>(AttendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
