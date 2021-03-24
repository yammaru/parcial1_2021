import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HotelRegistroComponent } from './parcial/hotel-registro/hotel-registro.component';
import { HotelConsultaComponent } from './parcial/hotel-consulta/hotel-consulta.component';

const routes: Routes = [
  { path: 'registrohotel', component:HotelRegistroComponent},
  { path: 'ch', component: HotelConsultaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
