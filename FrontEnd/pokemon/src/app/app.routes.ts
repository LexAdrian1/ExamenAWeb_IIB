import {Routes} from "@angular/router";
import {InicioComponent} from "./inicio/inicio.component";
import {PerfilUsuarioComponent} from "./perfil/perfil-usuario.component";
import {LoginComponent} from "./login/login.component";
import {NavBarMainComponent} from "./nav-bar-main/nav-bar-main.component";
import {TransferenciaComponent} from "./transferencia/transferencia.component";

export const Mis_Rutas:Routes = [

  {
    component: PerfilUsuarioComponent,
    path: 'perfil'
  },
  {
    component: InicioComponent,
    path: 'busqueda'
  },
  {
    component: NavBarMainComponent,
    path:'main'
  },
  {
    component: TransferenciaComponent,
    path: 'transferencia'
  },
  {
    path:'',
    redirectTo:'/busqueda',
    pathMatch: 'full'
  }

];
