import { RouterModule, Routes} from '@angular/router';
import { RegistroComponent } from  './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RecuperarCuentaComponent } from './recuperar-cuenta/recuperar-cuenta.component';

const app_routers: Routes =[
	{path: 'registro', component: RegistroComponent},
	{path: 'inicio', component: InicioComponent},
	{path: 'login', component: LoginComponent},
	{path: 'nav', component: NavComponent},
	{path: 'recuperarCuenta', component: RecuperarCuentaComponent},
	{path: '**', pathMatch:'full', redirectTo :'login'}
];

export const app_routing = RouterModule.forRoot(app_routers);
