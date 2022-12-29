import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserHomeComponent } from './users/user-home/user-home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'users', pathMatch:'full'},
  {path:'users', component:UsersComponent},
  {path:'userhome', component:UserHomeComponent},
  {path:'userlist', component:UserListComponent},
  {path:'userdetails/:id', component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
