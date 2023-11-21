import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LABEL_CONSTANT } from 'src/app/constants/label.constant';
import { ProdottoCardComponent } from 'src/app/modules/prodotto/prodotto-card/prodotto-card.component';

@Component({
  selector: 'app-prodotto-eliminato',
  templateUrl: './prodotto-eliminato.component.html',
  styleUrls: ['./prodotto-eliminato.component.scss']
})
export class ProdottoEliminatoComponent {
  labelConstant = LABEL_CONSTANT;
  
 constructor(
  private dialog: MatDialogRef<ProdottoCardComponent>,
  private router: Router,
  ) {}

 /** Chiude la modale senza azione */
 closeDialog() {
  this.dialog.close(false);
 }

}

