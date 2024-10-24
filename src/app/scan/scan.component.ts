import { Component, OnInit, OnDestroy } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';

@Component({
  selector: 'app-barcode-scanner',
  template: `
    <div id="scanner-container" style="width: 640px; height: 480px;"></div>
    <div *ngIf="scannedResult">
      <label>Résultat du scan:</label>
      <input type="text" [value]="scannedResult" readonly />
    </div>
  `,
  styleUrls: ['./scan.component.css'], // Ajoutez le CSS si nécessaire
})
export class BarcodeScannerComponent implements OnInit, OnDestroy {
  scannedResult: string | null = null;
  scanner: Html5QrcodeScanner | null = null;

  ngOnInit() {
    // Initialiser le scanner de code-barres
    this.scanner = new Html5QrcodeScanner(
      'scanner-container',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    this.scanner.render(this.onScanSuccess.bind(this), this.onScanFailure.bind(this));
  }

  ngOnDestroy() {
    this.scanner?.clear(); // Arrêter le scanner lorsque le composant est détruit
  }

  onScanSuccess(decodedText: string) {
    this.scannedResult = decodedText;
    console.log('Code-barres scanné : ', decodedText);
    this.scanner?.clear(); // Arrêter le scan après une lecture réussie
  }

  onScanFailure(error: string) {
    console.warn(`Erreur de scan : ${error}`);
  }
}
