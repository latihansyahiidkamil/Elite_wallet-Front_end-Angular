import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { Customer } from 'src/app/shared/model/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private builder: FormBuilder, private customerService: CustomerService) { }

  registerFormGroup: FormGroup;
  ngOnInit() {
    this.registerFormGroup = this.builder.group(
      {
        first_name : ['', Validators.required],
        last_name : ['', Validators.required],
        birth_date : ['', Validators.required],
        national_id : ['', Validators.required],
        mother_name : ['', Validators.required],
        username : ['', Validators.required],
        email : ['', Validators.required],
        password : ['', Validators.required],
      }
    );
  }

  submitRegister(){
    const firstName = this.registerFormGroup.controls["first_name"].value;
    const lastName = this.registerFormGroup.controls["last_name"].value;
    const birthDate = this.registerFormGroup.controls["birth_date"].value
    const nationalId = this.registerFormGroup.controls["national_id"].value;
    const motherName = this.registerFormGroup.controls["mother_name"].value;
    const username = this.registerFormGroup.controls["username"].value;
    const email = this.registerFormGroup.controls["email"].value;
    const password = this.registerFormGroup.controls["password"].value
    let customer = new Customer(null,firstName,lastName,birthDate,nationalId,motherName,username,email,password)
    this.customerService.postCustomer(customer).subscribe((response)=>{
      if(response.responseCode=="20"){
        alert("Succed");
        this.router.navigate(['/login']);
      }
      else{
        alert(response.data+response.responseMessage)
      }
    })
  }
}
