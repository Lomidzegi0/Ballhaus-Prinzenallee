import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProduktionenComponent } from './produktionen/produktionen.component';
import { UberUnsComponent } from './uber-uns/uber-uns.component';
import { HausComponent } from './haus/haus.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'prod', component: ProduktionenComponent},
  { path: 'uber', component: UberUnsComponent},
  { path: 'haus', component: HausComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
