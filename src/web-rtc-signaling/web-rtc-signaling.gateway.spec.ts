import { Test, TestingModule } from '@nestjs/testing';
import { WebRtcSignalingGateway } from './web-rtc-signaling.gateway';

describe('WebRtcSignalingGateway', () => {
  let gateway: WebRtcSignalingGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebRtcSignalingGateway],
    }).compile();

    gateway = module.get<WebRtcSignalingGateway>(WebRtcSignalingGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
