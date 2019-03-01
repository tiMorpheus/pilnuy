import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  sidebarHidden = false;
  
  constructor(public translate: TranslateService) {
      translate.addLangs(['en', 'ru']);
      translate.setDefaultLang('en');

      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  ngOnInit() {

  }


    toggleSidebar(): void {

      if(this.sidebarHidden){
        this.sidebarHidden = false;
      } else {
        this.sidebarHidden = true;
      }


    }
  function (){

    }

}
