// news.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private newsData: any[] = [];
  private localStorageKey = 'newsData';

  constructor() {
    // Load news data from localStorage when the service is instantiated
    this.loadNewsData();
  }

  addNews(imageUrl: string) {
    const id = this.generateUniqueId();
    this.newsData.push({ id, imageUrl });
    this.saveNewsData();
  }
  
  

  deleteNews(id: string) {
    this.newsData = this.newsData.filter(item => item.id !== id);
    this.saveNewsData(); // Save news data to localStorage after deletion
  }

  getAllNews() {
    return this.newsData; 
  }

  private generateUniqueId(): string {
    // Logic to generate unique IDs
    return 'a' + (this.newsData.length + 1);
  }

  private saveNewsData() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.newsData));
  }

  private loadNewsData() {
    const storedData = localStorage.getItem(this.localStorageKey);
    this.newsData = storedData ? JSON.parse(storedData) : [];
  }
}
