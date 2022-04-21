import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Reporte } from 'src/classes/reporte';
import { DatosService } from 'src/services/backoffice.service';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ReporteEditarComponent } from './reporte-editar/reporte-editar.component';
import { ReportefotoComponent } from './reportefoto/reportefoto.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  lat : number = 24.8042;
  lng : number = -107.431;
  @Input() zoom: number = 15;

  mapOptions : google.maps.MapOptions = {
    styles: [  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#d6e2e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#cfd4d5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#7492a8"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "lightness": 25
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde2e3"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#cfd4d5"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde2e3"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#7492a8"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde2e3"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -100
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#588ca4"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a9de83"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#bae6a1"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c6e8b3"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#bae6a1"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -45
      },
      {
        "lightness": 10
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#41626b"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c1d1d6"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#a6b5bb"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#9fb6bd"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -70
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b4cbd4"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#588ca4"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#008cb5"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": -5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a6cbe3"
      }
    ]
  }
]
};
  @Input() center: google.maps.LatLngLiteral = {lat: this.lat, lng: this.lng };
  
  reportes: Reporte[] = [];
  markerOptions: google.maps.MarkerOptions = {draggable: false, clickable: true};
  markerPositions: google.maps.LatLng[] = [];
  fotoReporte: string = '';
  reporteq : Reporte = {
    id : 0,
    cUsuario : "",
    celular: "",
    correo: "",
    cuenta: "",
    descripcion: "",
    domicilio: "",
    estatus: "",
    estatusclase: "",
    fecha: "",
    icono: "",
    lat: 0,
    lng: 0,
    reporte: "",
    respuesta: "",
    tiporeporte: "",
    usuario: 0,
  };
  icono = ''
  cargandoFoto: boolean = false;
  map!: google.maps.Map;


  constructor( private _datosService: DatosService,
    public dialog: MatDialog,) {
    }

  ngOnInit(): void {
    this.cargaDatos();
    setInterval(() => {
      this.cargaDatos(); 
    }, 60000);

  }

  esperar = false;

  cargaDatos() {
    this.esperar = true;
    this._datosService.getData('SP_BO_Reportes', '1', '')
      .subscribe(data => {
        this.reportes = data.datos;
        this.esperar = false;
        for(let reporte of this.reportes){
          this.markerPositions.push(new google.maps.LatLng(reporte.lat, reporte.lng));
        }
      });
  }

  cargarFoto(id: string) {
    this.cargandoFoto = true;
    this._datosService.getData('SP_BO_Reportes', '2', '|V1=' + id)
      .subscribe(data => {
        this.fotoReporte = 'data:image/jpg;base64,' + data.datos[0].fotografia;
        this.cargandoFoto = false;
      });
  }

    mostrarFoto() {
    const dialogRef = this.dialog.open(ReportefotoComponent, {
      width: '650px',
      height: '650px',
      data: { foto: this.fotoReporte }
    });
  }


  editarReporte() {
    const dialogRef = this.dialog.open(ReporteEditarComponent, {
      width: '70%',
      height: '600px',
      disableClose: true,
      data: {
        reporte: this.reporteq,
        foto: this.fotoReporte,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reporteq = result;
    });
  }
  

  openInfoWindow(marker: MapMarker, id: number, reportel: Reporte, icono: string) {

    this.cargarFoto(id.toString());
    this.reporteq = reportel;
    this.icono = icono
    this.infoWindow.open(marker);
  }

  regresarPosition(index : number){
    return this.markerPositions[index];
  }

}
