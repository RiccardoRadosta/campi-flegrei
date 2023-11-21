import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CARATTERISTIC_CONSTANT } from 'src/app/constants/caratteristic.constant';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent {

  caratteristicConstant : any = CARATTERISTIC_CONSTANT;

  constructor(
    private router : Router,
  ){}

  ngOnInit(){}

  navigate(){  
    this.router.navigateByUrl(``);
  }

  navigate2(){  
    this.router.navigateByUrl(``);
  }
}
