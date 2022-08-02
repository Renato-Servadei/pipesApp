import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'pipesApp';
  nombre: string = 'Renato Servadei';
  valor: number = 91218
  obj = {
    nombre: 'Juan Carlos'
  }

  constructor (private pNgConf: PrimeNGConfig) {

  }

  ngOnInit(): void {
    this.pNgConf.ripple= true;
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj)
  }
}
