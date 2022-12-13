import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public Titulo:string = "curso"
  public image:string = "https://i.ytimg.com/vi/773JUncFREA/maxresdefault.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
