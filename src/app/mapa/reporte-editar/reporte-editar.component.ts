import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Reporte } from 'src/classes/reporte';
import { DatosService } from 'src/services/backoffice.service';

@Component({
  selector: 'app-reporte-editar',
  templateUrl: './reporte-editar.component.html',
  styleUrls: ['./reporte-editar.component.css']
})
export class ReporteEditarComponent implements OnInit {

  reporte: Reporte;
  fotoMostrar: string;
  esperar: boolean = false;

  respuestas: any[] = [];

  constructor(private _datosService: DatosService,
    public dialogRef: MatDialogRef<ReporteEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.reporte = data.reporte;
    this.fotoMostrar = data.foto;
    console.log(this.reporte);
  }

  ngOnInit() {
    this.cargarHistorial();
  }

  enviarRespuesta(resp: string) {
    this.reporte.respuesta = resp;
    this.esperar = true;
    this._datosService.getData('SP_BO_Reportes', '3',
      '|V1=' + this.reporte.id +
      '|V2=' + this.reporte.estatus +
      '|V3=' + this.reporte.respuesta + '|')
      .subscribe(data => {
        this.reporte.estatus = data.datos[0].estatus;
        this.reporte.respuesta = data.datos[0].mensaje;
        this.cargarHistorial();
        this.esperar = false;
        return;
      });
  }

  cambioEstado(event: MatSelectChange) {
    this.reporte.estatusclase = event.source.triggerValue;
  }

  cargarHistorial() {
    this._datosService.getData('SP_BO_Reportes', '4',
      '|V1=' + this.reporte.id + '|')
      .subscribe(data => {
        this.respuestas = data.datos;
      });
  }

  cerrarVentana() {
    this.dialogRef.close(this.reporte);
  }

}
