import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './clients/categorie/categorie.component';
import { HomeComponent } from './clients/home/home.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  {path:'categorie',component:CategorieComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
