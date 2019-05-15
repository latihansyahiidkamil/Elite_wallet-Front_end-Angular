import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/shared/service/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  idr: number;
  usd: number;
  aapl: number;
  orcl: number;
  constructor(private walletService: WalletService) { }

  ngOnInit() {
    this.getWallet();
  }
  getWallet(){
    this.walletService.getWallet(Number(localStorage.getItem('customer_number'))).subscribe((data)=>{
      this.idr=data.data.idr;
      this.usd=data.data.usd;
      this.aapl=data.data.aapl;
      this.orcl=data.data.orcl;
    })
  }
}
