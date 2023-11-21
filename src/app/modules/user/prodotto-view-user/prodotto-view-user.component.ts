import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LABEL_CONSTANT } from 'src/app/constants/label.constant';
import { ImageService } from 'src/app/service/image.service';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { ImageViewComponent } from 'src/app/shared/image-view/image-view.component';

@Component({
  selector: 'app-prodotto-view-user',
  templateUrl: './prodotto-view-user.component.html',
  styleUrls: ['./prodotto-view-user.component.scss']
})
export class ProdottoViewUserComponent {
  constructor(
    private imageService : ImageService,
    private prodottoService : ProdottoService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ){}

  labelConstant: any = LABEL_CONSTANT;

  imagePreviewsBK: any[] = [];
  imagePreviews: any[] = [];
  imagePreviewsMain: any;


  prodottoFormGroup = this._formBuilder.group({
    id : [null,[ Validators.required]],
    name: ['',[ Validators.required]],
    costo: [null,[ Validators.required, Validators.pattern("^[0-9]+(\.[0-9]+)?$")]],
    description: ['',[ Validators.required]],
  });

  id :number = 0
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.readValue();
  }

  readValue(){
    this.prodottoService.getProdottoSingolo(this.id).subscribe({
      next: (res) => {
        this.imageService.getListaImage(this.id).subscribe({
        
        next: (res)=>{
          this.imagePreviewsMain = res[0].image ;
          for (let i = 1; i < res.length; i++) {
            this.imagePreviews.push(res[i].image );
          }
          for (let i = 0; i < res.length; i++) {
            this.imagePreviewsBK.push(res[i].image );
          }
        }
      }),

        this.prodottoFormGroup.patchValue({
          id : res.id,
          name: res.name,
          costo: res.costo,
          description: res.description,
          
        })
      }
    })
  }
  getFileType(preview: string): string {
    if (typeof preview === 'string') {
      const extension = preview.split('.').pop()?.toLowerCase();
      switch (extension) {
        case 'jpg':
          return 'data:image/jpg;base64,' + preview;
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
    else{return ""}
  }
  showImageModal(previews : any, index : number){
    console.log(previews)
    //fare aprire una finestra con le immagini dei prodotti grandi
    this.dialog.open(ImageViewComponent, {
      data: {
        previews,
        index ,
      },
      width: '560px',
      height: '400px',
      disableClose: true,
    });
  }
  back(){
    this.router.navigateByUrl(`/admin-homepage`);
  }
}
