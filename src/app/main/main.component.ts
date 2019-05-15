import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../shared/service/customer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  img_src= "http://www.expatoverseas.in/wp-content/uploads/2016/07/dummy-profile.png"
  constructor(private route: Router, private customerService: CustomerService) { }
  full_name: string;
  email: string;
  ngOnInit() {
    this.getProfile();
  }
  logoutSubmit(){
    localStorage.removeItem('username');
    localStorage.removeItem('customer_number');
    this.route.navigate(['/']).then(()=>{
      window.location.reload();
    });
    
  };

  getProfile(){
    let customer_number = localStorage.getItem('customer_number');
    this.customerService.getCustomer(Number(customer_number)).subscribe((data)=>{
      this.full_name= data.data.firstName+" "+data.data.lastName;
      this.email= data.data.email;
    })
  }

}
