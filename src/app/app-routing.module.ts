import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: '**', component:ErrorComponent},
  {path: 'login', component:LoginComponent },
  {path: 'registro', component:RegistroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
