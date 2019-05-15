export class Wallet{
    walletId: number;
    idr: number;
    usd: number;
    aapl: number;
    orcl: number;
    idr_w_account_number: number;
    assets_w_account_number: number;
    customerNumber: number;

    constructor(walletId_input, idr_input, usd_input, aapl_input, orcl_input,
        customerNumber_input){
            this.walletId = walletId_input;
            this.idr = idr_input;
            this.usd = usd_input;
            this.aapl = aapl_input;
            this.orcl = orcl_input;
            this.customerNumber = customerNumber_input;
        }
}