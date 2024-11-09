import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './clients/categorie/categorie.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './clients/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './clients/product/product.component';
import { ModalComponent } from './clients/modal/modal.component';
import { SomethingMissingComponent } from './clients/something-missing/something-missing.component';
import { FormsModule } from '@angular/forms';
import { SearchAllComponent } from './clients/search-all/search-all.component';
import { ScanComponent } from './clients/scan/scan.component';
import { NavBarComponent } from './admin/nav-bar/nav-bar.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AddCategorieComponent } from './admin/add-categorie/add-categorie.component';
import { ReviewComponent } from './admin/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ModalComponent,
    SomethingMissingComponent,
    SearchAllComponent,
    ScanComponent,
    NavBarComponent,
    SideBarComponent,
    DashbordComponent,
    AddProductComponent,
    ProductListComponent,
    CategoriesComponent,
    AddCategorieComponent,
    ReviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
