// produktionen.component.ts
import { Component } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-produktionen',
  templateUrl: './produktionen.component.html',
  styleUrls: ['./produktionen.component.css']
})
export class ProduktionenComponent {
  constructor(private cardService: CardService) {}
  cards: any[] = [];
  uniqueDates: string[] = [];

  ngOnInit() {
    this.cards = this.cardService.getCards();
    this.uniqueDates = this.getUniqueDates(this.cards);
    this.cards.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  getUniqueDates(cards: any[]): string[] {
    const uniqueDates = [...new Set(cards.map(card => card.date))];
    return uniqueDates;
  }

  getDayNumberFromDate(date: string): string {
    const dateObj = new Date(date);
    return ('0' + dateObj.getDate()).slice(-2);
  }

  getMonthFromDate(date: string): string {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('de-DE', { month: 'short' });
  }

  getDayFromDate(date: string): string {
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const dateObj = new Date(date);
    const dayOfWeek = days[dateObj.getDay()];
    return `${dayOfWeek}`;
  }
}
