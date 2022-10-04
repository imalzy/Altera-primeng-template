import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppMainComponent } from './core/layouts/app.main.component';
import { AppTopBarComponent } from './core/layouts/app.topbar.component';
import { AppFooterComponent } from './core/layouts/app.footer.component';
import { AppConfigComponent } from './core/layouts/app.config.component';
import { AppMenuComponent } from './core/layouts/app.menu.component';
import { AppMenuitemComponent } from './core/layouts/app.menuitem.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuService } from './service/app.menu.service';
import { ConfigService } from './service/app.config.service';
import { NgPrimeModule } from './shared/ngprime.module';
import { EmployeeService } from './pages/employee/services/employee.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgPrimeModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        DashboardComponent,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MenuService,
        ConfigService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
