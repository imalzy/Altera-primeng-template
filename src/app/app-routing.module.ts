import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppMainComponent } from './core/layouts/app.main.component';
import { AuthGuard } from './core/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppMainComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  {
    path: 'course',
     canLoad: [AuthGuard], //gagal /JS Lazy loadnya tidak akan di unduh
    canActivate: [AuthGuard], //gagal / JS akan di unduh
    component: AppMainComponent,
    loadChildren: () =>
      import('./pages/course/course.module').then((mod) => mod.CourseModule),
  },
  {
    path: 'employee',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    component: AppMainComponent,
    loadChildren: () =>
      import('./pages/employee/employee.module').then(
        (mod) => mod.EmployeeModule
      ),
  },
  {
    path: 'e-commerce',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    component: AppMainComponent,
    loadChildren: () =>
      import('./pages/e-commerce/e-commerce.module').then(
        (mod) => mod.ECommerceModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
    import('./pages/auth/auth.module').then((mod) => mod.AuthModule),
  },
  { path: 'pages/not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'pages/not-found' },
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
