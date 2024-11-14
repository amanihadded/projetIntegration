import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './clients/categorie/categorie.component';
import { HomeComponent } from './clients/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './clients/product/product.component';
import { ModalComponent } from './clients/modal/modal.component';
import { SomethingMissingComponent } from './clients/something-missing/something-missing.component';
import { SearchAllComponent } from './clients/search-all/search-all.component';
import { ScanComponent } from './clients/scan/scan.component';
import { NavBarComponent } from './admin/nav-bar/nav-bar.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AddCategorieComponent } from './admin/add-categorie/add-categorie.component';
import { ReviewComponent } from './admin/review/review.component';
import { CategoriesComponent } from './admin/categories/categories.component';

const routes: Routes = [
  {path:'categorie',component:CategorieComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'products/:categoryId', component: ProductComponent },
  {path:'modal',component:ModalComponent},
  {path:'something-missing',component:SomethingMissingComponent},
  {path:'searchAll',component:SearchAllComponent},
  {path:'scan',component:ScanComponent},
  {path:'navbar',component:NavBarComponent},
  {path:'sidebar',component:SideBarComponent},
  {path:'admin',component:DashbordComponent},
  {path:'admin/products/add',component:AddProductComponent},
  {path:'admin/products/list',component:ProductListComponent},
  {path:'admin/categories/add',component:AddCategorieComponent},
  {path:'admin/categories/list',component:CategoriesComponent},
  {path:'admin/reviews',component:ReviewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
