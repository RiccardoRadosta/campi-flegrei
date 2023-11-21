import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BUTTON_CONSTANT } from 'src/app/constants/button.constant';
import { ERRORS_CONSTANT } from 'src/app/constants/error.constant';
import { INPUT_CONSTANT } from 'src/app/constants/input.constant';
import { LABEL_CONSTANT } from 'src/app/constants/label.constant';
import { ImageService } from 'src/app/service/image.service';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { ChangeDetectorRef } from '@angular/core';
import { ProdottoModificatoComponent } from 'src/app/shared/prodotto-modificato/prodotto-modificato.component';

@Component({
  selector: 'app-prodotto-update',
  templateUrl: './prodotto-update.component.html',
  styleUrls: ['./prodotto-update.component.scss'],
  template: `<div [innerHTML]="svgContent"></div>`,
})
export class ProdottoUpdateComponent {
  @Input() svgContent: string = '';
  constructor(
    private imageService : ImageService,
    private prodottoService : ProdottoService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ){}

  inputConstant: any = INPUT_CONSTANT;
  buttonConstant: any = BUTTON_CONSTANT;
  labelConstant: any = LABEL_CONSTANT;
  errorsConstant: any = ERRORS_CONSTANT;

  file! : File ;
  imagesFiles:{ imageUrl: string, posizione: any}[] = [];
  imageUrl:string | ArrayBuffer | null = null;;

  //array immagini presenti sul DB
  imagePreviews: any[] = [];

  //array di BK immagini presenti sul DB
  imagePreviewsBK: any[] = [];

   //array di  //array di visualizzazione delle immagini presenti sul DB + nuove
  imagePreviewsVisualiz: any[] = [];

   //array di immagini nuove di cui fare il push
  imagePreviewsNew: any[] = [];


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
          for (let i = 0; i < res.length; i++) {
            //array di visualizzazione grafica
            this.imagePreviewsVisualiz.push(res[i].image );

            const imageObjectBK = {
              id : res[i].id,
              imageUrl : res[i].image
            };
            //array delle immagini già presenti sul db
            this.imagePreviews.push(imageObjectBK );
             //array di BK delle immagini già presenti sul db
            
            this.imagePreviewsBK.push(imageObjectBK );

            const imageObject = {
              eliminazione : true
            };
            this.imagePreviewsNew.push(imageObject );

          }
        }
      }),

        //fare il pach value dei dati, li prende esatti
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
  aggiungiProdotto(){
    if(this.file){
    };
   
  }

  onFileSelected(event: Event) {
    
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
        // Utilizza una NodeList in modo da poter iterare su più file
        const files = inputElement.files as FileList;
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = (e: any) => {
                // Crea un oggetto che rappresenti l'immagine e aggiungilo a un array o a un oggetto che memorizza le anteprime
                const imageObject = {
                    eliminazione : false,
                    file: file,
                    imageUrl: e.target.result,
                };
                const imageData = e.target.result as string;
                const base64Data = imageData.split(',')[1]; 
                this.addImage(base64Data)
                // Aggiungi l'oggetto immagine all'array o all'oggetto di anteprime
                this.imagePreviewsVisualiz.push(base64Data);
                this.imagePreviewsNew.push(imageObject);
            };

            reader.readAsDataURL(file);
        }
    }
    this.cdr.detectChanges();
  }

  count = 0;
  addImage(imageUrl: any){
    this.imagesFiles[this.count] = {
      imageUrl: imageUrl,
      posizione : this.count,
    }
    this.count += 1;
  }

  eliminaImmagine(index: number) {
    this.imagePreviews.splice(index, 1);
    this.imagePreviewsVisualiz.splice(index, 1);
    this.imagePreviewsNew.splice(index, 1);
    //this.imagesFiles.splice(index,1)
  }

  back(){
    this.router.navigateByUrl(`/admin-homepage`);
  }

  updateProduct(){
    this.prodottoService.insertProdotto(this.prodottoFormGroup.value).subscribe({
      next: (res) =>{
        let i = 0;
        for (let i = 0; i < this.imagePreviewsNew.length; i++) {
          if (this.imagePreviewsNew[i].eliminazione === true) {
          } else {
            this.imageService.insertImg(this.imagePreviewsNew[i].file, res.id).subscribe({
              next: (result) => {
                console.log(result);
              },
              error: (error) => {
                console.error(error);
              }
            });
          }
        }
        if (this.imagePreviewsBK != this.imagePreviews) {
          // Identifica gli elementi presenti in imagePreviewsBK ma non in imagePreviews
          const elementiDaEliminare = this.imagePreviewsBK.filter((elementoBK) => {
            return !this.imagePreviews.some((elemento) => elemento.id === elementoBK.id);
          });
          //Elimina gli elementi dal database utilizzando l'URL dell'immagine
          elementiDaEliminare.forEach((elemento) => {
            this.imageService.deleteImageById(elemento.id).subscribe({
              next: (result) => {
              },
              error: (error) => {
              }
            });
          });

        }
      }
    })
    this.dialog.open(ProdottoModificatoComponent, {
      width: '660px',
      height: '300px',
      disableClose: true,
    });
    
  }

  

}

