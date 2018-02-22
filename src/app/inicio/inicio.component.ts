import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

	public titulo: string;

  constructor() { 
  	this.titulo = "Inicio";
  }

  ngOnInit() {
  }

}
