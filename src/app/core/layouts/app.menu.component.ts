import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
  selector: 'app-menu',
  template: `
    <div class="layout-menu-container">
      <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
        <li
          app-menu
          class="layout-menuitem-category"
          *ngFor="let item of model; let i = index"
          [item]="item"
          [index]="i"
          [root]="true"
          role="none"
        >
          <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">
            {{ item.label }}
          </div>
          <ul role="menu">
            <li
              app-menuitem
              *ngFor="let child of item.items"
              [item]="child"
              [index]="i"
              role="none"
            ></li>
          </ul>
        </li>
      </ul>
    </div>
  `,
})
export class AppMenuComponent implements OnInit {
  model: any[];

  constructor(public appMain: AppMainComponent) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      {
        label: 'Course',
        items: [
          {
            label: 'Pertemuan 2',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/course/p2'],
          },
          {
            label: 'Pertemuan 4',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/course/p4'],
          },
          {
            label: 'Pertemuan 6',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/course/p6'],
          },
        ],
      },
      {
        label: 'E-Commerce',
        items: [
          {
            label: 'Product',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/e-commerce/products'],
          },
          {
            label: 'Category',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/e-commerce/category'],
          },
          {
            label: 'Order',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/e-commerce/orders'],
          },
        ],
      },
    ];
  }

  onKeydown(event: KeyboardEvent) {
    const nodeElement = <HTMLDivElement>event.target;
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }
}
