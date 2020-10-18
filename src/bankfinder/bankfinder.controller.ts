import { Controller, Get, Param } from '@nestjs/common';

import { BankFinderService } from './bankfinder.service';
import { BankInfo } from '../model/BankInfo';


@Controller('bankfinder')
export class BankFinderController {

  constructor(
    private service: BankFinderService
  ) { }


  @Get()
  getAllBanks(): BankInfo[] {
    return this.service.allBanks
  }

  @Get(':query')
  async searchBanks(@Param('query') query: string): Promise<BankInfo[]> {
    return await this.service.searchBanks(query)
  }

}
