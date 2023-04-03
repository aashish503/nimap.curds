import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  // { path: 'create-employee', component: EmployeeCreateComponent },
  // { path: 'edit-employee/:id', component: EmployeeEditComponent },
  // { path: 'employees-list', component: EmployeeListComponent },

  {path:'create-employee',loadChildren:()=>import('./components/components.module').then(mod=>mod.ComponentsModule)},
{path:'',loadChildren:()=>import('./components/components.module').then(mod=>mod.ComponentsModule)},
{path:'edit-employee/:id',loadChildren:()=>import('./components/components.module').then(mod=>mod.ComponentsModule)},
{path:'employees-list',loadChildren:()=>import('./components/components.module').then(mod=>mod.ComponentsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
