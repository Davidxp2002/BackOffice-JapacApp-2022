import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Avisos } from 'src/classes/avisos.class';
import { DatosService } from 'src/services/backoffice.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {


  avisos: Avisos[] = [];
  esperar: boolean = false;
  totalRegistros: number = 0;

  constructor(private _datosService: DatosService,
    public dialogRef: MatDialogRef<AvisosComponent>) { }

  ngOnInit() {
    this.cargaDatos(0);
  }

  cargaDatos(pagina: any) {
    this.esperar = true;
    this._datosService.getData('SP_Avisos', '2', '|PA=' + pagina + '|RP=8|')
      .subscribe(data => {
        this.esperar = false;
        this.avisos = data.datos;
        this.totalRegistros = data.mensajes[0].Registros;
        console.log(this.avisos);
      });
  }

}
