import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-registro',
  templateUrl: './hotel-registro.component.html',
  styleUrls: ['./hotel-registro.component.css']
})
export class HotelRegistroComponent implements OnInit {
  persona: Hotel;
  personasRegistradas: any;
  constructor() { }

  ngOnInit() {
  }
  RH() {
    this.personasRegistradas = this.obtenerPuls();
    this.personasRegistradas.push(this.persona);

    localStorage.setItem('parcial1', JSON.stringify(this.personasRegistradas));

    console.log(this.persona);
    console.log(this.personasRegistradas);
    alert('listo');
  }
  obtenerPuls() {
    if (localStorage.getItem('parcial1') != null) {
      var auxiliar = localStorage.getItem('parcial1');
      this.personasRegistradas = JSON.parse(auxiliar);
    } else {
      this.personasRegistradas = [];
    }
    return this.personasRegistradas;
  }
calcularTarifa(){
  
}
  calcularDia() {
    var Xmas95 = new Date(this.persona.fecha);
    var weekday = Xmas95.getDay();
    if (weekday >= 5 || weekday == 0) {
      return 'A';
    }
    return 'B';

  }
}
