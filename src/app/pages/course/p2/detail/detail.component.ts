import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPertemuan2 } from '../models/p2.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  data: IPertemuan2;
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((param) => {
      this.data = param as IPertemuan2;
    });
    console.log(this.data)
  }
}
