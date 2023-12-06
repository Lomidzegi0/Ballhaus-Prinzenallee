import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProduktionenComponent } from './produktionen/produktionen.component';
import { HausComponent } from './haus/haus.component';
import { UberUnsComponent } from './uber-uns/uber-uns.component';
import { FormsModule } from '@angular/forms';
import { CardService } from './services/card.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ProduktionenComponent,
    HausComponent,
    UberUnsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
