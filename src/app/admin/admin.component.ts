// admin.component.ts
import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cards: any[] = [];
  selectedFile: File | null = null;
  cardName: string = '';
  date: string = '';
  address: string = '';
  picture: string = '';
  authorNames: string[] = [];
  cardId: number = 0;
  newsList: any[] = [];
  session: any;
  markForSpecialContent: boolean = true;
  bio: string = '';
  newsPicture: string = '';

  constructor(private cardService: CardService, private newsService: NewsService) {
    this.newsList = this.newsService.getAllNews();
  }

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }
  onNewsFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file; 
    this.newsPicture = URL.createObjectURL(file);
  }
  


  onSubmit(form: any) {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        this.onUploadImage(imageUrl);
        form.resetForm();
        this.selectedFile = null; 
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  

  onUploadImage(imageUrl: string) {
    this.newsService.addNews(imageUrl);
    this.newsList = this.newsService.getAllNews();
  }

  onDeleteNews(id: string) {
    this.newsService.deleteNews(id);
    this.newsList = this.newsService.getAllNews();
  }
  addNews() {
    if (this.selectedFile) {
      const imageUrl = this.newsPicture;
      this.newsService.addNews(imageUrl);
      this.newsList = this.newsService.getAllNews();
      this.newsPicture = '';
      this.selectedFile = null;
    }
  }
  
  
  
  
  addCard() {
    const showSpecialContent = this.markForSpecialContent;
    const newCard = {
      cardName: this.cardName,
      date: this.date,
      address: this.address,
      picture: this.picture,
      bio: this.bio,
      authorNames: this.authorNames,
      markForSpecialContent: this.markForSpecialContent,
      showSpecialContent: showSpecialContent
    };
    this.markForSpecialContent = false;
    this.cardService.addCard(newCard);
    this.cards = this.cardService.getCards();
    this.bio = '';
  }

  deleteCard(cardId: number, cardName: string, cardDate: string) {
    this.cardService.deleteCard(cardId, cardName, cardDate);
    this.cards = this.cardService.getCards();
  }
}
