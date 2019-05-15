import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { CommonResponse } from '../model/common-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(customerNumber: number):Observable<CommonResponse<Customer>> {
    let url: string =`http://localhost:3000/customer?customerNumber=${customerNumber}`;
    console.log(url);
    return this.http.get<CommonResponse<Customer>>(url);
  }

  postCustomer(customer: Customer):Observable<CommonResponse<Customer>> {
      let url: string = `http://localhost:3000/customer`;
      console.log(url);
      return this.http.post<CommonResponse<Customer>>(url,customer);
  }
}