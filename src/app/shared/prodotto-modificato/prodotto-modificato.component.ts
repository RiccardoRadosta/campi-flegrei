import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LABEL_CONSTANT } from 'src/app/constants/label.constant';
import { ProdottoCardComponent } from 'src/app/modules/prodotto/prodotto-card/prodotto-card.component';

@Component({
  selector: 'app-prodotto-modificato',
  templateUrl: './prodotto-modificato.component.html',
  styleUrls: ['./prodotto-modificato.component.scss']
})
export class ProdottoModificatoComponent {
  labelConstant = LABEL_CONSTANT;
  
  constructor(
   private dialog: MatDialogRef<ProdottoCardComponent>,
   private router: Router,
   ) {}
 
  /** Chiude la modale senza azione */
  closeDialog() {
    this.router.navigateByUrl(`/admin-homepage`);
    this.dialog.close(false);
  }
}
