import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: any[] = [];
  latestId: number = 0;

  constructor() {
    this.loadLocalStorage();
  }

  addCard(card: any) {
    this.latestId++;
    card.cardId = this.latestId;
    this.cards.push(card);
    this.sortCardsByDate(); // Sort the cards array by date
    this.updateLocalStorage();
    console.log('Card added:', card);
    console.log('All cards:', this.cards);
  }

  getCards() {
    return this.cards;
  }

  deleteCard(cardId: number, cardName: string, cardDate: string) {
    this.cards = this.cards.filter(card => {
      return !(card.cardId === cardId && card.cardName === cardName && card.date === cardDate);
    });
    this.sortCardsByDate(); // Sort the cards array by date
    this.updateLocalStorage();
    console.log('Card deleted:', cardId);
    console.log('Remaining cards:', this.cards);
  }

  updateLocalStorage() {
    if (this.cards.length > 0) {
      localStorage.setItem('cards', JSON.stringify(this.cards));
      localStorage.setItem('latestId', this.latestId.toString());
    } else {
      localStorage.removeItem('cards'); // Remove 'cards' key if no cards exist
      localStorage.removeItem('latestId'); // Remove 'latestId' key if no cards exist
    }
  }

  loadLocalStorage() {
    const data = localStorage.getItem('cards');
    const latestId = localStorage.getItem('latestId');
    this.cards = data ? JSON.parse(data) : [];
    this.latestId = latestId ? parseInt(latestId) : 0;
    this.sortCardsByDate(); // Sort the cards array by date
  }

  private sortCardsByDate() {
    this.cards.sort((a, b) => new Date(b.cardDate).getTime() - new Date(a.cardDate).getTime());
  }
}
