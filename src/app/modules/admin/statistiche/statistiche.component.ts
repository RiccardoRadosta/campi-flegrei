import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisiteService } from 'src/app/service/visite.service';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.scss']
})
export class StatisticheComponent {
 constructor(
  private visiteService : VisiteService,
  private router : Router,
 ){}

 autorizzazione : any;
 accessi : any = {
  "giornaliero" : 0,
  "settimanale" : 0,
  "mensile" : 0
 }
 
 ngOnInit(){
  this.autorizzazione =sessionStorage.getItem('autorizzazione');
    if ( this.autorizzazione ===  null) {
      this.router.navigateByUrl(`/user-homepage`);
    }
  this.visiteService.accessi().subscribe({
    next: (res) =>{
      this.accessi = res;
      console.log(this.accessi)
    }
  })
 }
}
