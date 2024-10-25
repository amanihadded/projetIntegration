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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
