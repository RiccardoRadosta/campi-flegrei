import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LABEL_CONSTANT } from 'src/app/constants/label.constant';
import { LoginComponent } from 'src/app/modules/admin/login/login.component';

@Component({
  selector: 'app-autorizzazione',
  templateUrl: './autorizzazione.component.html',
  styleUrls: ['./autorizzazione.component.scss']
})
export class AutorizzazioneComponent {
  labelConstant = LABEL_CONSTANT;

  constructor(
    private dialog: MatDialogRef<LoginComponent>,
    private router: Router,
    ) {}
  
  closeDialog() {
    this.router.navigateByUrl(`/user-homepage`);
    this.dialog.close(false);
   }
}
