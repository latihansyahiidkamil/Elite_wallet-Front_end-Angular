import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './BeforeLoginPage/index/index.component';
import { LoginComponent } from './BeforeLoginPage/login/login.component';
import { RegisterComponent } from './BeforeLoginPage/register/register.component';


const routes: Routes = [
  {path:"",redirectTo:"index",pathMatch:'prefix'},
  {path:"index",component: IndexComponent},
  {path:"login",component: LoginComponent},
  {path:"register",component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
