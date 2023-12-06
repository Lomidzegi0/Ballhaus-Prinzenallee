// home.component.ts
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  newsList: any[] = [];
  newsData: any[] = [];
  constructor(private newsService: NewsService) {
    this.newsList = this.newsService.getAllNews().reverse();
  }
  
  deleteNews(id: string) {
    this.newsService.deleteNews(id);
    this.newsList = this.newsService.getAllNews(); // Update the newsList after deletion
  }
}