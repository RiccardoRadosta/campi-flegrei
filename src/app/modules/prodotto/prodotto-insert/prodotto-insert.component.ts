import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BUTTON_CONSTANT } from 'src/app/constants/button.constant';
import { INPUT_CONSTANT } from 'src/app/constants/input.constant';
import { ImageService } from 'src/app/service/image.service';
import { ProdottoService } from 'src/app/service/prodotto.service';
import { MatDialog } from '@angular/material/dialog';
import { ProdottoCreatoComponent } from 'src/app/shared/prodotto-creato/prodotto-creato.component';
import { LABEL_CONSTANT } from 'src/app/constants/label.constant';

@Component({
  selector: 'app-prodotto-insert',
  templateUrl: './prodotto-insert.component.html',
  styleUrls: ['./prodotto-insert.component.scss']
})
export class ProdottoInsertComponent {

  constructor(
    private imageService : ImageService,
    private prodottoService : ProdottoService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
  ){}

  inputConstant: any = INPUT_CONSTANT;
  buttonConstant: any = BUTTON_CONSTANT;
  labelConstant : any = LABEL_CONSTANT;

  file! : File ;
  imagesFiles:{ file: File, imageUrl: string, posizione: any}[] = [];
  imageUrl:string | ArrayBuffer | null = null;;
  imagePreviews: { file: File, imageUrl: string }[] = [];


  prodottoFormGroup = this._formBuilder.group({
    name: ['',[ Validators.required]],
    costo: [null,[ Validators.required, Validators.pattern("^[0-9]+(\.[0-9]+)?$")]],
    description: ['',[ Validators.required]],
  });

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
                    file: file,
                    imageUrl: e.target.result,
                };
                this.addImage(file, e.target.result)
                // Aggiungi l'oggetto immagine all'array o all'oggetto di anteprime
                this.imagePreviews.push(imageObject);

                // Se hai bisogno di fare qualcosa con l'array di anteprime, puoi farlo qui
                // Ad esempio, puoi passare l'array a un metodo che lo gestirà
                // this.handleImagePreviews(this.imagePreviews);
            };

            reader.readAsDataURL(file);
        }
    }
  }

  count = 0;
  addImage(file: any, imageUrl: any){
    this.imagesFiles[this.count] = {
      file: file,
      imageUrl: imageUrl,
      posizione : this.count,
    }
    this.count += 1;
  }

  eliminaImmagine(index: number) {
    this.imagePreviews.splice(index, 1);
    this.imagesFiles.splice(index,1)
  }

  back(){
    this.router.navigateByUrl(`/admin-homepage`);
  }

  addProduct(){
    this.prodottoService.insertProdotto(this.prodottoFormGroup.value).subscribe({
      next: (res) =>{
        console.log(res)
        let i = 0;
        for (let a in this.imagesFiles){
          console.log(this.imagesFiles[i])
          this.imageService.insertImg(this.imagesFiles[i].file, res.id).subscribe({
          
          next: (res) =>{
            console.log(res)
          }
          })
          i +=1;
        }
        this.dialog.open(ProdottoCreatoComponent, {
          width: '660px',
          height: '300px',
          disableClose: true,
        });
        
      }
    })
    
    this.imagesFiles = this.imagesFiles.filter(item => !!item);
    console.log(this.imagesFiles)
  }

  

}
