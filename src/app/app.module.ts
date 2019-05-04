import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './BeforeLoginPage/login/login.component';
import { IndexComponent } from './BeforeLoginPage/index/index.component';
import { RegisterComponent } from './BeforeLoginPage/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    
    IndexComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
