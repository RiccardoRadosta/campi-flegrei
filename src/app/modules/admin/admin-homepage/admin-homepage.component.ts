import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { VisiteService } from 'src/app/service/visite.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.scss'],
})
export class AdminHomepageComponent {
  constructor(
    private prodottoService : ProdottoService,
    private imageService : ImageService,
    private router : Router,
  ){}
  listaProdotti: any[] = [];
  listaImage: any[] = [];
  autorizzazione : any;

  ngOnInit(){
    this.autorizzazione =sessionStorage.getItem('autorizzazione');
    if ( this.autorizzazione ===  null) {
      this.router.navigateByUrl(`/user-homepage`);
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

  nuovoProdotto(){
    this.router.navigateByUrl(`/prodotto-insert`);
  }
  prodottoEliminato(event : Event){
    this.listaProdotti=this.listaProdotti.filter(prodotto => prodotto.id !== event)
  }

}
