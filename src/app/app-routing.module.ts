import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './before-login-page/index/index.component';
import { LoginComponent } from './before-login-page/login/login.component';
import { RegisterComponent } from './before-login-page/register/register.component';

// import { MainModule } from './main/main.module';

const routes: Routes = [
  {path:"",redirectTo:"index",pathMatch:'prefix'},
  {path:"index",component: IndexComponent},
  
  {path:"login",component: LoginComponent},
  {path:"register",component: RegisterComponent},

  {path:"main",loadChildren:'./main/main.module#MainModule'}
  // {path:"main",component: MainComponent},
  // {path:"home",component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
