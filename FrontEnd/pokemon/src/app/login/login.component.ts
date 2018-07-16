import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsuarioClass} from "../misClases/usuario.Class";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  user:UsuarioClass;
  @Output() ingresarUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.user = new UsuarioClass();
  }

  ingresarAlSistema(usuario:UsuarioClass){

    if(usuario.correo==="kevin.jimenez@hotmail.com"){
      if(usuario.password==="1234"){
        console.log('bienvenido');
        this.ingresarUser.emit(usuario);
      }else{
      console.log('error pass');
      }
    }else {
      console.log('error email');
    }

  }

}
