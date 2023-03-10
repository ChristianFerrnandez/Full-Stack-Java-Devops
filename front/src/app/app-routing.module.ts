import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TypeuserFormComponent } from './components/typeuser-form/typeuser-form.component';
import { TypeuserListComponent } from './components/typeuser-list/typeuser-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'users', component:UserListComponent},
  {path: 'users/adduser', component:UserFormComponent},
  {path: 'users/adduser/:id', component:UserFormComponent},
  {path: 'typeusers', component:TypeuserListComponent},
  {path: 'typeusers/addtype', component:TypeuserFormComponent},
  {path: 'typeusers/addtype/:id', component:TypeuserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
