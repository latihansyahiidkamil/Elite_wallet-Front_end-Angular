import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/service/login.service';
import { Login } from 'src/app/shared/model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private builder: FormBuilder, private loginService: LoginService) {
  }
  message;
  ngOnInit() {
    this.loginFormGroup = this.builder.group(
      {
        emailusername : ['', Validators.required],
        password : ['', Validators.required],
      }
    );
  }
  loginFormGroup: FormGroup;

  submitLogin(){
    const email = this.loginFormGroup.controls["emailusername"].value;
    const username = this.loginFormGroup.controls["emailusername"].value;
    const password = this.loginFormGroup.controls["password"].value
    let loginData= new Login(email, username, password)
    this.loginService.customerLogin(loginData).subscribe(
      (response)=>{
        if(response.responseCode!=='20'){
          this.message = "email/username atau password salah"
         }
         else{
           localStorage.setItem('username', response.data.username);
           localStorage.setItem('customer_number', response.data.customerNumber);
           this.message = alert(`${response.data.username} berhasil login`);
           this.router.navigate(['/main']);
         }
      }
    )
  }
}
