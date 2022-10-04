import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(private emplService: EmployeeService) { }

  ngOnInit(): void {
    const data = this.emplService.getEmployee()
    console.log(data)
  }

}


// ng generate services path => CLI generate service
