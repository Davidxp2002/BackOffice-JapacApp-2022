import { Component, Output, Input } from '@angular/core';
import { Reporte } from 'src/classes/reporte';
import { DatosService } from 'src/services/backoffice.service';
import {MatDialog} from '@angular/material/dialog';
import { GridConsultaComponent } from './grid-consulta/grid-consulta.component';
import { AvisosComponent } from './avisos/avisos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Back Office Japac Móvil';

  showFiller = false;
  esperar = false;

  menuLateral: boolean = true;

 reportes: Reporte[] = [];
  lat: number = 24.8042;
  lng: number = -107.431;
  @Output() zoom: number = 10;

  center: google.maps.LatLngLiteral = {lat: this.lat, lng: this.lng};

  constructor( private _datosService: DatosService,
     public dialog: MatDialog) {  }

  
  
  toggleMenu() {
    this.menuLateral = !this.menuLateral;
  }

  actualizaCenter(event: number) {
    this.center = {lat : this.reportes[event].lat, lng: this.reportes[event].lng};
    this.zoom = 18;
  }  

  ngOnInit() {
    this.cargaDatos();
    setInterval(() => {
      this.cargaDatos(); 
    }, 60000);
  }

  cargaDatos() {
    this.esperar = true;
    this._datosService.getData('SP_BO_Reportes', '1', '')
      .subscribe(data => {
        this.reportes = data.datos;
        this.esperar = false;
      });
  }

  abrirGrid(activo: any) {
    const dialogRef = this.dialog.open(GridConsultaComponent, {
      width: '70%',
      height: '545px',
      data: {
        activos: activo
      }
    });
  }

  crudAvisos() {
    const dialogRef = this.dialog.open(AvisosComponent, {
      width: '70%',
      height: '545px'
    });
  }

}
