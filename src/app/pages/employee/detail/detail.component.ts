import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  constructor(private emplService: EmployeeService) { }

  ngOnInit(): void {
    const data = this.emplService.getEmployee()
    console.log(data)
  }

}
