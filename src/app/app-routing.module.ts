import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesMaterialComponent } from './clientes-material/clientes-material.component';
import { ClienteAddEditComponent } from './cliente-add-edit/cliente-add-edit.component';


const routes: Routes = [
  {path:'clientes',component:ClientesComponent},
  {path:'clientesMaterial',component:ClientesMaterialComponent},
  {path:'clienteEdit/:id',component:ClienteAddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
