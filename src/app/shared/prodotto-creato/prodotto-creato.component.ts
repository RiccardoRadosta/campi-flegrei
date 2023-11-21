import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LABEL_CONSTANT } from 'src/app/constants/label.constant';

@Component({
  selector: 'app-prodotto-creato',
  templateUrl: './prodotto-creato.component.html',
  styleUrls: ['./prodotto-creato.component.scss']
})
export class ProdottoCreatoComponent {
  labelConstant = LABEL_CONSTANT;
  
 constructor(
  private dialog: MatDialogRef<ProdottoCreatoComponent>,
  private router: Router,
  ) {}

 /** Chiude la modale senza azione */
 closeDialog() {
  this.router.navigateByUrl(`/admin-homepage`);
  this.dialog.close(false);
 }

}
