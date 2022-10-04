import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppMainComponent } from './core/layouts/app.main.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    // canActivate: [AuthGuard],
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  {
    path: 'course',
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard],
    component: AppMainComponent,
    loadChildren: () =>
      import('./pages/course/course.module').then((mod) => mod.CourseModule),
  },
  {
    path: 'employee',
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard],
    component: AppMainComponent,
    loadChildren: () =>
      import('./pages/employee/employee.module').then((mod) => mod.EmployeeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((mod) => mod.LoginModule),
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
