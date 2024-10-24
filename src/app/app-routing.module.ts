import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAllComponent } from './search-all/search-all.component'; // Import du composant SearchAll
import { ModalComponent } from './modal/modal.component'; // Import du composant Modal
import { HomeComponent } from './home/home.component'; // Import du composant Home
import { BarcodeScannerComponent } from './scan/scan.component'; // Import du composant BarcodeScanner

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route pour HomeComponent (page d'accueil)
  { path: 'search', component: SearchAllComponent }, // Route pour le composant SearchAll
  { path: 'modal', component: ModalComponent }, // Route pour le composant Modal
  { path: 'scan', component: BarcodeScannerComponent }, // Route pour le composant BarcodeScanner
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection pour les routes non trouvées
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
