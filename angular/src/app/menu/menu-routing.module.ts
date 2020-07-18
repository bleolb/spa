import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent} from './usuario/usuario.component'

import { MenuComponent } from './menu.component';
import { from } from 'rxjs';

const routes: Routes = [{ path: '', component: MenuComponent },
{ path: 'usuario', component: UsuarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
