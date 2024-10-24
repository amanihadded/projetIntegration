import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importez votre module de routage
import { AppComponent } from './app.component'; // Importez le composant principal
import { SearchAllComponent } from './search-all/search-all.component'; // Importez le composant SearchAll
import { ModalComponent } from './modal/modal.component'; // Importez le composant Modal
import { BarcodeScannerComponent } from './scan/scan.component'; // Importez le composant du scanner de codes-barres
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importez FontAwesomeModule

@NgModule({
  declarations: [
    AppComponent,
    SearchAllComponent,
    ModalComponent,
    BarcodeScannerComponent // Déclarez le BarcodeScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importez le module de routage
    FontAwesomeModule // Importez le module FontAwesome pour les icônes
  ],
  providers: [],
  bootstrap: [AppComponent] // Indiquez le composant principal à démarrer
})
export class AppModule { }
