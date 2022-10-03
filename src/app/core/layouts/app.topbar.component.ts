import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
  items: MenuItem[];

  items2: MenuItem[];

  constructor(public appMain: AppMainComponent) {
    this.items2 = [
      {label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => this.logOut()}
  ];
  }

  logOut():void{
    alert('logout');
  }
}
