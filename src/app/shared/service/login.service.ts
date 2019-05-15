import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { CommonResponse } from '../model/common-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  customerLogin(login:Login):Observable<CommonResponse<Customer>> {
    let url: string =`http://localhost:3000/login`;
    console.log(url);
    return this.http.post<CommonResponse<Customer>>(url,login);
  }
}