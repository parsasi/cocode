import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('getUserByUsername should return a user or a falsy value' , () => {
    expect(service.getUserByUsername('parsasi')).toBeTruthy()
    expect(service.getUserByUsername('SomethingThatDoesnotExist')).toBeFalsy()
  })
});
