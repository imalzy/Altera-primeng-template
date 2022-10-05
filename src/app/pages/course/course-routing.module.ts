import { PostResolver } from './../../service/post.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './p2/detail/detail.component';
import { P2Component } from './p2/p2.component';
import { P4Component } from './p4/p4.component';
import { EditFormComponent } from './p6/edit-form/edit-form.component';
import { P6Component } from './p6/p6.component';

const routes: Routes = [
  {
    path: 'p2',
    component: P2Component,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'p4',
    component: P4Component,
  },
  {
    path: 'p6',
    component: P6Component,
  },
  {
    path: 'edit/:id',
    component: EditFormComponent,
    resolve: {
      data : PostResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
