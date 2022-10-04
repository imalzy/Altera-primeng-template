import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPertemuan2 } from '../models/p2.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('items') items: IPertemuan2[] = [];
  @Output('editData') editData = new EventEmitter<IPertemuan2>();
  @Output('deleteData') deleteData = new EventEmitter<number | string>();

  constructor(private router:Router) {}

  ngOnInit(): void {}

  onEdit(value: IPertemuan2): void {
    // console.log(value);
    this.editData.emit(value);
  }

  onDelete(value: number | string):void{
    // console.log(value)
    this.deleteData.emit(value)
  }

  onDetail(value: IPertemuan2):void{
    // this.router.navigateByUrl(`/course/detail/${value.id}`)
    this.router.navigate(['/course/detail'], {queryParams: value})
    // this.router.navigate(['/contact'])

  }
}
