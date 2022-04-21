export class Avisos {
  public id: number;
  public titulo: string;
  public mensaje: string;
  public fecha: string;
  public fechaInicial: any;
  public fechaFinal: any;

  constructor(
    id: number,
    titulo: string,
    mensaje: string,
    fecha: string,
    fechaInicial: string,
    fechaFinal: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.fecha = fecha;
    this.fechaInicial = new Date();
    this.fechaFinal = new Date();
  }
}
