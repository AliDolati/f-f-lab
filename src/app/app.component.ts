import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['fa', 'en']);
    translate.setDefaultLang('fa');

    const browserLang = translate.getBrowserLang();
    const chosenLang = browserLang?.match(/en|fa/) ? browserLang : 'fa';
    translate.use(chosenLang);

    document.documentElement.dir = chosenLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = chosenLang;
  }

  switchLanguage() {
    const newLang = this.translate.currentLang === 'fa' ? 'en' : 'fa';
    this.translate.use(newLang);
    document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  }
}
