import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reportefoto',
  templateUrl: './reportefoto.component.html',
  styleUrls: ['./reportefoto.component.css']
})
export class ReportefotoComponent implements OnInit {

  fotoMostrar: string;

  constructor(
    public dialogRef: MatDialogRef<ReportefotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.fotoMostrar = data.foto;
  }
  ngOnInit(): void {
  }

}
