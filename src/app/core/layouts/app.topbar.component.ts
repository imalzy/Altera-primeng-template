import { SessionService } from './../../pages/auth/service/session.service';
import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
  items: MenuItem[];

  items2: MenuItem[];

  constructor(
    public appMain: AppMainComponent,
    public sessionService: SessionService,
    private router: Router
  ) {
    this.items2 = [
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.logOut(),
      },
    ];
  }

  logOut(): void {
    this.sessionService.destroySession();
    this.router.navigateByUrl('/auth/login');
  }
}
