import { Test, TestingModule } from '@nestjs/testing';
import { BankFinderService } from './bankfinder.service';

describe('BankfinderService', () => {
  let service: BankFinderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankFinderService],
    }).compile();

    service = module.get<BankFinderService>(BankFinderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
