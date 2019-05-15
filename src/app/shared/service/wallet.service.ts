import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../model/common-response';
import { Wallet } from '../model/wallet';

@Injectable({
    providedIn: 'root'
})
export class WalletService{
    constructor(private http: HttpClient){}

    getWallet(customer_number:number):Observable<CommonResponse<Wallet>>{
        let url=`http://localhost:3000/customer/${customer_number}/wallet`
        console.log(url);
        return this.http.get<CommonResponse<Wallet>>(url);
    }
}