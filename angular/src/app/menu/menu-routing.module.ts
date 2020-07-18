import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent} from './usuario/usuario.component'
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component'
import { EditUserComponent } from './edit-user/edit-user.component'
import { MenuComponent } from './menu.component';
import { from } from 'rxjs';

const routes: Routes = [{ path: '', component: MenuComponent },
{ path: 'usuario', component: UsuarioComponent },
{ path: 'register-users', component: RegistroUsuarioComponent },
{ path: 'editUser', component: EditUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
