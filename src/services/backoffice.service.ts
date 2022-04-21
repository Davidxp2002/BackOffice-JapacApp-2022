import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { URL_DATASERVICE } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  /* Direccionamiento del WebService de Datos */
  private serviceUrl = URL_DATASERVICE + '/ivkProcedimientoJSONTyped';

  /* Se utiliza para los llamdos HTTP a los servicios de Datos */
  private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor( private _http: HttpClient) { }

  getData(procedimiento: string, validar: string, parametros: string) {

    const body = JSON.stringify({ procedimiento: procedimiento, validar: validar, parametros: parametros, token: 'tokengenerado' });

    return this._http.post(this.serviceUrl, body, { headers: this.headers})
      .pipe(map( (resultado: any) => {
        return JSON.parse(resultado.d.replace('(', '').replace(')', ''));
        }));
  }
}
