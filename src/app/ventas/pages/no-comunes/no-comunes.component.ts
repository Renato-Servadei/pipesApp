import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent  {

//Select
numero: number = 0;
personas =[{ nombre: 'Juan Carlos', 
genero: 'masculino'}, { nombre: 'Ramona', 
genero: 'femenino'},{ nombre: 'Ricardo', 
genero: 'masculino'},{ nombre: 'Epifania', 
genero: 'femenino'},{ nombre: 'Rodolfo', 
genero: 'masculino'},{ nombre: 'Amanda', 
genero: 'femenino'},{ nombre: 'Tiburcio', 
genero: 'masculino'},{ nombre: 'Anacleta', 
genero: 'femenino'}]
invitacionMap = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}


cambiarPersona() {

  this.numero = this.numero + 1;
  if (this.numero == this.personas.length) {
    this.numero = 0
  }
  }

//plural
clientes: string[] = ['Marta', 'Josefa', 'Alberto', 'Cristina', 'Juan Carlos', 'Alfonso'];
clientesMap = {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  'other': 'tenemos # clientes esperando',

}
borrarCliente() {
  this.clientes.splice(-1)

}

//key value
persona = {
  nombre: 'Renato',
  edad: 34,
  direccion: 'Cabo Polonio, Uruguay'
}

//json pipe
heroes = [
  {
    nombre: "Ortega",
    partidos: 158
  },
  {
    nombre: "Enzo Pere",
    partidos: 144
  },
  {
    nombre: "Armani",
    partidos: 135
  }
]

// async
miObservable = interval(1000);
valorPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve( 'Vamos River Carajo');
  }, 3500);
})
}
