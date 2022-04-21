export class Reporte {

    public id: number;
    public usuario: number;
    public cUsuario: string;
    public celular: string;
    public correo: string;
    public cuenta: string;
    public tiporeporte: string;
    public reporte: string;
    public icono: string;
    public descripcion: string;
    public domicilio: string;
    public estatus: string;
    public estatusclase: string;
    public respuesta: string;
    public lat: number;
    public lng: number;
    public fecha: string;
  
    constructor (
      id: number,
      usuario: number,
      cUsuario: string,
      celular: string,
      correo: string,
      cuenta: string,
      tiporeporte: string,
      reporte: string,
      icono: string,
      descripcion: string,
      domicilio: string,
      estatus: string,
      estatusclase: string,
      respuesta: string,
      lat: number,
      lng: number,
      fecha: string
    ) {
      this.id = id;
      this.usuario = usuario;
      this.cUsuario = cUsuario;
      this.celular = celular;
      this.correo = correo;
      this.cuenta = cuenta;
      this.tiporeporte = tiporeporte;
      this.reporte = reporte;
      this.icono  = icono;
      this.descripcion = descripcion;
      this.domicilio = domicilio;
      this.estatus = estatus;
      this.estatusclase = estatusclase;
      this.respuesta = respuesta;
      this.lat = lat;
      this.lng = lng;
      this.fecha = fecha;
    }
  
  }
  