import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BUTTON_CONSTANT } from 'src/app/constants/button.constant';
import { INPUT_CONSTANT } from 'src/app/constants/input.constant';
import { LABEL_CONSTANT } from 'src/app/constants/label.constant';
import { LoginService } from 'src/app/service/login.service';
import { AutorizzazioneComponent } from 'src/app/shared/autorizzazione/autorizzazione.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private _formBuilder : FormBuilder,
    private loginService : LoginService,
    private router : Router,
    private dialog: MatDialog,
  ){}

  inputConstant: any = INPUT_CONSTANT;
  buttonConstant: any = BUTTON_CONSTANT;
  labelConstant : any = LABEL_CONSTANT;

  loginFormGroup = this._formBuilder.group({
    username: ['',[ Validators.required,  Validators.pattern("^[A-Z][a-z0-9]+@[a-zA-Z]+\\.[a-zA-Z]{2,}$")]],
    password: [null,[ Validators.required, Validators.pattern("^[A-Z][a-z]+[0-9]+$")]],
  });

  login(){
    this.loginService.login(this.loginFormGroup.value).subscribe({
      next: (res) => {
        if (res === true) {
          sessionStorage.setItem('autorizzazione', JSON.stringify(true))
          this.router.navigateByUrl(`/admin-homepage`);
        }
        else{
          this.dialog.open(AutorizzazioneComponent, {
            width: '660px',
            height: '300px',
            disableClose: true,
          });
        }
      }
    })
  }
}
