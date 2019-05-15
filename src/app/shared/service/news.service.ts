import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { CommonResponse } from '../model/common-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  stock_news_api_key = "kty6sncknlv8dvvod45crti8l2czlybrqntk8ptw"
  getNews():Observable <any> {
    let url: string ="https://stocknewsapi.com/api/v1?tickers=TSLA&items=30&fallback=true&token="+this.stock_news_api_key;
    console.log(url);
    return this.http.get<any>(url);
  }

}