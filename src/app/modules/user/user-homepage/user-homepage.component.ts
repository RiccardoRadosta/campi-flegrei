import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { VisiteService } from 'src/app/service/visite.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.scss']
})
export class UserHomepageComponent {
  constructor(
    private router : Router,
    private visiteService : VisiteService,
    private prodottoService : ProdottoService,
    private imageService : ImageService,
  ){}
  accesso : any;
  listaProdotti: any[] = [];
  listaImage: any[] = [];

  ngOnInit(){
    //localStorage.setItem('accesso', JSON.stringify(false));
    this.accesso =sessionStorage.getItem('accesso');
    console.log(this.accesso)
    if ( this.accesso ===  null) {
      this.visiteService.insertVisita().subscribe()
      sessionStorage.setItem('accesso', JSON.stringify(true))
      console.log("fatto")
    }
    this.prodottoService.getListaProdotto().subscribe({
      next: (res) => {
        this.listaProdotti = res;
        console.log(this.listaProdotti)
        this.imageService.getFirstListaImage().subscribe({
          next: (res) => {
            this.listaImage = res;
            console.log(this.listaImage)
          }
        })
      }
    })
  }
}
