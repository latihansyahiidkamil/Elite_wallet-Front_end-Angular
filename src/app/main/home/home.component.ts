import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  news_list;
  ngOnInit() {
    this.getNewsList();
  }

  getNewsList(){
    this.newsService.getNews().subscribe((datas)=>{
      this.news_list = datas.data.slice(0,6);
    })
  }
}
