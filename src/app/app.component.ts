import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {






  title(title: any) {
    throw new Error('Method not implemented.');
  }
  cards: any[] = [];
  uniqueDates: string[] = [];
  constructor(private cardService: CardService,private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  ngOnInit() {
    
 
localStorage.setItem('testKey', 'testValue');
console.log(localStorage.getItem('testKey')); 

    this.cards = this.cardService.getCards();
    this.uniqueDates = this.getUniqueDates(this.cards);
    this.cards.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  getDayNumberFromDate(date: string): string {
    const dateObj = new Date(date);
    return ('0' + dateObj.getDate()).slice(-2);
}
  getUniqueDates(cards: any[]): string[] {
    const uniqueDates = [...new Set(cards.map(card => card.date))];
    return uniqueDates;
  }
  getDayFromDate(date: string): string {
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const dateObj = new Date(date);
    const dayOfWeek = days[dateObj.getDay()];
    return `${dayOfWeek}`;
  }



  enableLeftScroll() {
  const leftm = document.getElementsByClassName('leftm')[0] as Element;
  leftm.setAttribute('style', 'overflow-y: auto');
}

disableLeftScroll() {
  const leftm = document.getElementsByClassName('leftm')[0] as Element;
  leftm.setAttribute('style', 'overflow-y: auto');
}

enableRightScroll() {
  const rightm = document.getElementsByClassName('rightm')[0] as Element;
  rightm.setAttribute('style', 'overflow-y: auto');
}

disableRightScroll() {
  const rightm = document.getElementsByClassName('rightm')[0] as Element;
  rightm.setAttribute('style', 'overflow-y: auto');
}
}
