import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public activeLang = localStorage.getItem('lang') || 'es';
  
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
  }
  
  public changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
