import { Injectable, HttpService } from '@nestjs/common';

import { BankInfo } from "../model/BankInfo"


@Injectable()
export class BankFinderService {

  allBanks: BankInfo[] = []


  constructor(
    private httpService: HttpService
  ) {
    // TODO: make port configurable
    this.httpService.get('http://localhost:3000/assets/BankList.json')
      .subscribe(response => {
        this.allBanks = response.data as BankInfo[]
      })
  }


  searchBanks(query: string): Promise<BankInfo[]> {
    return new Promise(resolve => {
      if (!!! query || !!! query.trim()) {
        resolve(this.allBanks)

        return
      }

      const lowerCaseQuery = query.toLocaleLowerCase()

      resolve(this.allBanks.filter(bank => {
        return bank.bankCode.startsWith(lowerCaseQuery)
          || bank.name.toLocaleLowerCase().includes(lowerCaseQuery)
          || bank.city.toLocaleLowerCase().startsWith(lowerCaseQuery)
      }));
    })
  }

}
