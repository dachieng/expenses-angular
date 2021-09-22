import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ListusersComponent } from './listusers/listusers.component';

const routes: Routes = [
  {path:"register", component:AuthenticationComponent},
  {path:"users-list",component:ListusersComponent},
  {path:"",redirectTo:"register",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
