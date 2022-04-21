import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Usuario } from 'src/classes/usuario.class';
import { DatosService } from 'src/services/backoffice.service';

@Component({
  selector: 'app-grid-consulta',
  templateUrl: './grid-consulta.component.html',
  styleUrls: ['./grid-consulta.component.css']
})
export class GridConsultaComponent implements OnInit {
  usuarios: Usuario[] = [];
  esperar: boolean = false;
  activos: number;
  titulo: string = 'Activos';

  panelOpenState: boolean = false;
  totalRegistros: number = 0;

  pageEvent!: PageEvent;

  // emojis = ['🐼', '💪', '🐷', '🤖', '👽', '🐥'];

  constructor(private _datosService: DatosService,
    public dialogRef: MatDialogRef<GridConsultaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.activos = data.activos;
    if (this.activos === 1) {
      this.titulo = 'activos';
    } else {
      this.titulo = 'inactivos';
    }
  }

  ngOnInit() {
    this.cargaDatos(0);
  }

  cargaDatos(pagina : any) {
    this.esperar = true;
    this._datosService.getData('SP_BO_Reportes', '21', '|V4=' + this.activos + '|PA=' + pagina + '|RP=8|')
      .subscribe(data => {
        this.esperar = false;
        this.usuarios = data.datos;
        this.totalRegistros = data.mensajes[0].Registros;
      });
  }

  colorActivo(a: boolean) {
    if (a) {
      return 'primary';
    } else {
      return 'warn';
    }
  }

  cambiaPagina(pageEvent: PageEvent) {
    this.cargaDatos(pageEvent.pageIndex);
  }
}
