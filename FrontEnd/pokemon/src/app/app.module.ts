import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { InicioComponent } from './inicio/inicio.component';
import { PerfilUsuarioComponent } from './perfil/perfil-usuario.component';
import {RouterModule} from "@angular/router";
import {Mis_Rutas} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import { NavBarMainComponent } from './nav-bar-main/nav-bar-main.component';
import { UserPerfilComponent } from './ComponentesUsuarios/user-perfil/user-perfil.component';
import { ModeloHijoComponent } from './componentesHijos/modelo-hijo/modelo-hijo.component';
import { ModeloPapaComponent } from './componentesPapas/modelo-papa/modelo-papa.component';
import { ButonVisitarComponent } from './ComponentesUsuarios/buton-visitar/buton-visitar.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { ButonTransferirComponent } from './componentesHijos/buton-transferir/buton-transferir.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PerfilUsuarioComponent,
    NavBarMainComponent,
    UserPerfilComponent,
    ModeloHijoComponent,
    ModeloPapaComponent,
    ButonVisitarComponent,
    TransferenciaComponent,
    ButonTransferirComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      Mis_Rutas,{useHash:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
