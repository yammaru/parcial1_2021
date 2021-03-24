import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-consulta',
  templateUrl: './hotel-consulta.component.html',
  styleUrls: ['./hotel-consulta.component.css']
})
export class HotelConsultaComponent implements OnInit {
  personasRegistradas: any;
  personas: Hotel;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('parcial1') != null) {
      this.personasRegistradas = JSON.parse(localStorage.getItem('parcial1'));
  }
this.personas  = this.personasRegistradas;
  }

}
