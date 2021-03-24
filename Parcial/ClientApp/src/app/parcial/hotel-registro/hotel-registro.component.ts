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

  ngOnInit() {  this.persona = new Hotel();
  }
  add() {
    
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
  if(this.calcularDia()=='A'){
    if(this.persona.hotel=='HB'){
      this.persona.tarifa=100000;
    }if(this.persona.hotel=='HC'){this.persona.tarifa=85000;}else{this.persona.tarifa=95000;}
  }else{if(this.persona.hotel=='HB'){
    this.persona.tarifa=80000;
  }if(this.persona.hotel=='HC'){this.persona.tarifa=78000;}else{this.persona.tarifa=75000;}}
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
