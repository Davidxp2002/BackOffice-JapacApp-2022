import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReportesComponent } from './reportes/reportes.component';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MapaComponent } from './mapa/mapa.component';
import { ReportefotoComponent } from './mapa/reportefoto/reportefoto.component';
import { SafehtmlPipe } from './pipes/safehtml.pipe';
import { MatCardModule } from '@angular/material/card';
import { ReporteEditarComponent } from './mapa/reporte-editar/reporte-editar.component';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { GridConsultaComponent } from './grid-consulta/grid-consulta.component';
import { AvisosComponent } from './avisos/avisos.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    ReportesComponent,
    ReportefotoComponent,
    ReporteEditarComponent,
    SafehtmlPipe,
    MapaComponent,
    GridConsultaComponent,
    AvisosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTabsModule,
    GoogleMapsModule, 
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatPaginatorModule,
  ],
  exports: [
    MapaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
