import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {


  @Input() nombreUsuario:string;
  @Input() urlImagen:string;

  constructor() { }

  ngOnInit() {
  }

}
