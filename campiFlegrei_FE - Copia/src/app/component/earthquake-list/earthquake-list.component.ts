import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-earthquake-list',
  templateUrl: './earthquake-list.component.html',
  styleUrls: ['./earthquake-list.component.scss']
})
export class EarthquakeListComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private translate: TranslateService) {
     translate.setDefaultLang('it'); // Lingua predefinita
      } switchLanguage(language: string) { this.translate.use(language); }
}
