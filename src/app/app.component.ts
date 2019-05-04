import { Component, OnInit, OnChanges, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit,AfterContentChecked,AfterViewChecked{
  ngAfterViewChecked(): void {
    this.loginCheck=!!localStorage.getItem('username');
  }
  ngOnChanges(): void {
    this.loginCheck=!!localStorage.getItem('username');
  }
  ngAfterContentChecked(): void {
    this.loginCheck=!!localStorage.getItem('username');
  }
  ngOnInit(): void {
    this.loginCheck=!!localStorage.getItem('username');
  }
  
  loginCheck:boolean = false;

}
