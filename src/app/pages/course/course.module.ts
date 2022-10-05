import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { P2Component } from './p2/p2.component';
import { TableComponent } from './p2/table/table.component';
import { NgPrimeModule } from 'src/app/shared/ngprime.module';
import { DetailComponent } from './p2/detail/detail.component';
import { P4Component } from './p4/p4.component';
import { TableP4Component } from './p4/table-p4/table-p4.component';
import { StoreService } from './store.service';
import { P6Component } from './p6/p6.component';
import { ToastrModule } from 'ngx-toastr';
import { EditFormComponent } from './p6/edit-form/edit-form.component';

@NgModule({
  declarations: [
    P2Component,
    TableComponent,
    DetailComponent,
    P4Component,
    TableP4Component,
    P6Component,
    EditFormComponent,
  ],
  imports: [CommonModule, NgPrimeModule,  CourseRoutingModule],
  providers: [StoreService],
})
export class CourseModule {}
