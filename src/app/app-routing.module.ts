import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppMainComponent } from './core/layouts/app.main.component';

const routes: Routes = [
    {
        path: '',
        component: AppMainComponent,
        children: [{ path: '', component: DashboardComponent }],
    },
    { path: '**', redirectTo: 'pages/notfound' },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
