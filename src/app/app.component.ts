import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Search',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'help-circle-outline'
    }
    ];
  constructor() {}
}
