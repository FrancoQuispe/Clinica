import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
	public titulo:string;

  constructor() { 
  }

  ngOnInit() {
  }

}
