import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { EditarClientesComponent } from './componentes/editar-clientes/editar-clientes.component';
import { Authguard } from './guardianes/auth.guard';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';


const routes: Routes = [
  {path: '', component: TableroComponent, canActivate: [Authguard]},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent, canActivate: [ConfiguracionGuard]},
  {path: 'configuracion', component: ConfiguracionComponent, canActivate: [Authguard]},
  {path: 'cliente/editar/:id', component: EditarClientesComponent, canActivate: [Authguard]},
  {path: '**', component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
