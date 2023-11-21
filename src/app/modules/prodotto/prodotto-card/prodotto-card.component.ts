import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { ProdottoEliminatoComponent } from 'src/app/shared/prodotto-eliminato/prodotto-eliminato.component';

@Component({
  selector: 'app-prodotto-card',
  templateUrl: './prodotto-card.component.html',
  styleUrls: ['./prodotto-card.component.scss']
})
export class ProdottoCardComponent implements OnInit {
 
  
  constructor(
    private prodottoService : ProdottoService,
    private imageService : ImageService,
    private router: Router,
    private dialog: MatDialog,
  ){}
  
  @Input() prodotto : any;
  @Input() image : any;
  @Output() prodottoEliminato = new EventEmitter <any>();

  ngOnInit(): void {
  
      console.log(this.prodotto)
   
    
    console.log()
  }

  mostraProdotto(id : number,  event: Event){
    event.stopPropagation();
    this.router.navigateByUrl(`/prodotto-view/${id}`);
    console.log(id)
  }
  deleteProdotto(id : number,  event: Event){
    event.stopPropagation();
    this.imageService.deleteImage(id).subscribe({
      next: (res) =>{
        console.log(res)
        this.prodottoService.deleteProdotto(id).subscribe({
          next: (res) =>{
            console.log(res)
          }
        });
      }
    });
    this.dialog.open(ProdottoEliminatoComponent, {
      width: '660px',
      height: '300px',
      disableClose: true,
    });
    this.eliminazioneProdotto(id);
  }
  updateProdotto(id : number,  event: Event){
    event.stopPropagation();
    this.router.navigateByUrl(`/prodotto-update/${id}`);
    console.log(id)
  }

  eliminazioneProdotto(id : any){
    this.prodottoEliminato.emit(id);
  }
  
  getFileType(preview: string): string {
    //console.log(this.test)
    if (preview) {
    const extension = preview.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'jpg':
      case 'jpeg':
        return 'data:image/jpeg;base64,' + preview;
      case 'png':
        return 'data:image/png;base64,'  + preview;
      case 'svg':
        return 'data:image/svg+xml;base64,'  + preview;
      default:
        return 'data:image/*;base64,'  + preview;
    }
  }
  else{
    return ""
  }
  }
}
