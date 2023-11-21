import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent {
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
