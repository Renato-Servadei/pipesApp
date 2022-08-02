import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  enMayusculas: boolean = true
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiarMayusculas() {
    this.enMayusculas = !this.enMayusculas
    
  }

  ordenarPor: string =''

  cambiarOrden(valor: string) {
    this.ordenarPor = valor
  }
}
