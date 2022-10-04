import { Injectable } from '@angular/core';
import { IEmp } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  private employee: IEmp[] = [
    {
      id: 1,
      name: 'Luffy',
      position: 'Captain',
      address: 'East Blue',
    },
    {
      id: 2,
      name: 'Zorro',
      position: 'Wakil Captain',
      address: 'East Blue',
    },
  ];
  constructor() {}

  getEmployee(): IEmp[] {
    return this.employee;
  }
}
