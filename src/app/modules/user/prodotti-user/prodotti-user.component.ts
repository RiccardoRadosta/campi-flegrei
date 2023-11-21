import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { ProdottoService } from 'src/app/service/prodotto.service';

@Component({
  selector: 'app-prodotti-user',
  templateUrl: './prodotti-user.component.html',
  styleUrls: ['./prodotti-user.component.scss']
})



export class ProdottiUserComponent {
  constructor(
    private prodottoService : ProdottoService,
    private imageService : ImageService,
    private router: Router,
    private dialog: MatDialog,
  ){}

  @Input() prodotto : any;
  @Input() image : any;

  mostraProdotto(id : number,  event: Event){
    event.stopPropagation();
    this.router.navigateByUrl(`/prodotto-view-user/${id}`);
    console.log(id)
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
