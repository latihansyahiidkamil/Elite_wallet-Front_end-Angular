import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { BeforeLoginPageComponent } from './before-login-page/before-login-page.component';
import { IndexComponent } from './before-login-page/index/index.component';
import { LoginComponent } from './before-login-page/login/login.component';
import { RegisterComponent } from './before-login-page/register/register.component';

import { HomeComponent } from './main/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    BeforeLoginPageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
