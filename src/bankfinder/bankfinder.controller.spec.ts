import { Test, TestingModule } from '@nestjs/testing';
import { BankFinderController } from './bankfinder.controller';

describe('Bankfinder Controller', () => {
  let controller: BankFinderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankFinderController],
    }).compile();

    controller = module.get<BankFinderController>(BankFinderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
