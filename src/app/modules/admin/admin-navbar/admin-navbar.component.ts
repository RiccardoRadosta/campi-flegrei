import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],


})
export class AdminNavbarComponent {
  constructor(
    private router : Router,
  ){}

  ngOnInit(){}

  navigateToStatistiche(){  
    this.router.navigateByUrl(`/statistiche`);
  }
  logout(){
    console.log("poi lo colleghiamo al logout!!!")
    //this.router.navigateByUrl(`/`);
  }

  navigateToProdotti(){  
    this.router.navigateByUrl(`/admin-homepage`);
  }
}
