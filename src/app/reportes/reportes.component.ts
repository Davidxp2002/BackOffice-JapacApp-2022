import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reporte } from 'src/classes/reporte';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {


  @Output() cambioCenter: EventEmitter<number> = new EventEmitter();
  @Input() reportes: Reporte[] = [];
  

  reporteActual(id: number) {
    this.cambioCenter.emit(id);
  }
  
}
