import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';


const mainRoutes: Routes = [
    { path: '',  redirectTo:'home' },
    { path: 'home',  component: HomeComponent },
    { path: 'wallet',  component: WalletComponent },
    
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class MainRoutingModule { }