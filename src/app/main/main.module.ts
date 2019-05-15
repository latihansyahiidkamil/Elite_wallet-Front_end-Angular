import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    HomeComponent,
    WalletComponent,
    AccountComponent
],
  
  imports: [
    CommonModule,

    FormsModule,

    MainRoutingModule,

    ReactiveFormsModule,

  ]
})
export class MainModule { }