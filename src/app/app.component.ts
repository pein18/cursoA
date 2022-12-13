import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string
  nro?:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-dream-app Angular';
  public arreglotarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.arreglotarjetas= [
      {titulo: 'video 1', subtitulo: 'subtitulo video 1',nro:5},
      {titulo: 'video 2', subtitulo: 'subtitulo video 2',nro:6},
      {titulo: 'video 3', subtitulo: 'subtitulo video 3',nro:7},
    ]
  }
}
