export class Usuario {

  public id: number;
  public cNombres: string;
  public cApellidos: string;
  public cCelular: string;
  public activo: boolean;
  public eMail: string;
  public codigo: string;
  public fechaCreacion: string;
  public fechaActivacion: string;
  public ultimoSMS: string;

  constructor(
    id: number,
    cNombres: string,
    cApellidos: string,
    cCelular: string,
    activo: boolean,
    eMail: string,
    codigo: string,
    fechaCreacion: string,
    fechaActivacion: string,
    ultimoSMS: string
  ) {
    this.id = id ;
    this.cNombres = cNombres;
    this.cApellidos = cApellidos ;
    this.cCelular = cCelular;
    this.activo = activo;
    this.eMail = eMail;
    this.codigo = codigo;
    this.fechaCreacion = fechaCreacion;
    this.fechaActivacion = fechaActivacion;
    this.ultimoSMS = ultimoSMS;
  }
}
