import { Component, ViewChild, ElementRef } from '@angular/core';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen';


  @ViewChild('closeAddExpenseModal', {static: false}) closeAddExpenseModal: ElementRef;
  modalTitle = '';
  modalContent = '';

  personas: Persona[] = [{
    codigo: 1,
    nombres: 'Anthony Elvin',
    apPaterno: 'Vargas',
    apMaterno: 'Jesús',
    edad: 36
  },
  {
  codigo: 2,
  nombres: 'Karem Gina',
  apPaterno: 'Meza',
  apMaterno: 'Reyes',
  edad: 36
},
{
codigo: 3,
nombres: 'John',
apPaterno: 'Anaya',
apMaterno: 'Veramendi',
edad: 36
},
{
codigo: 4,
nombres: 'David',
apPaterno: 'Sandoval',
apMaterno: 'Dávila',
edad: 36
},
{
  codigo: 5,
  nombres: 'Marco',
  apPaterno: 'Blanco',
  apMaterno: 'Cespedes',
  edad: 36
  },
  {
  codigo: 6,
  nombres: 'Ditmar',
  apPaterno: 'Estrada',
  apMaterno: 'Lopez',
  edad: 36
  },

];

personaSeleccionada: Persona;
personaSeleccionadaEdit: Persona;
selectedIndex: number;

getAll() {


}


showDetail(persona: Persona, index: number) {
  this.personaSeleccionada = new Persona();
  this.personaSeleccionada.codigo = this.personas[index].codigo;
  this.personaSeleccionada.nombres = this.personas[index].nombres;
  this.personaSeleccionada.apPaterno = this.personas[index].apPaterno;
  this.personaSeleccionada.apMaterno = this.personas[index].apMaterno;
  this.personaSeleccionada.edad = this.personas[index].edad;
  this.selectedIndex = index;
}


update(index: number): void {

  for (let i = 0; i < this.personas.length; i++) {

    if (this.selectedIndex === i) {
      this.personas[i] = this.personaSeleccionada;
      this.personas[i].nombres = this.personaSeleccionada.nombres;
      this.showDetail( this.personas[i], i);

      alert('La persona se actualizó satisfactoriamente!!');

    }

  }

}

showPopup(persona: Persona, index: number) {
  this.modalTitle = 'Confirmación de baja';
  this.modalContent = '¿Estás seguro que deseas dar de baja a:' + persona.nombres  + ' ' +  persona.apPaterno + ' ' + persona.apMaterno ;
  this.showDetail(persona, index);
  }


  delete(): void {
      this.personas.splice(this.selectedIndex, 1);
      alert('La persona se eliminó satisfactoriamente!1');
      this.showDetail( this.personas[0], 0);
  }

}
