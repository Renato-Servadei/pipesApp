import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'river';
  nombreUpper: string = 'RIVER';
  nombreCompleto: string = 'RiVeR PlAtE';

  fecha: Date = new Date();
}


