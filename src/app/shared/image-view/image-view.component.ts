import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdottoCreatoComponent } from '../prodotto-creato/prodotto-creato.component';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent {
  constructor(
  @Inject(MAT_DIALOG_DATA) public previews: any,
 // @Inject(MAT_DIALOG_DATA) public index: number,
  private dialog: MatDialogRef<ProdottoCreatoComponent>,) {}

  currentIndex : number = 0;
  
  

  ngOnInit(){
    //console.log(this.previews.preview)
    this.currentIndex =  this.previews.index
    
    console.log(this.currentIndex)
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
  changeImage() {
    this.currentIndex++
  }

  moveToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    else{
      this.currentIndex=this.previews.previews.length - 1;
    }
  }
  
  moveToNext() {
    if (this.currentIndex < this.previews.previews.length - 1) {
      this.currentIndex++;
    }
    else{
      this.currentIndex=0;
    }
  }
  closeDialog(){
   this.dialog.close(false);
  }
}
