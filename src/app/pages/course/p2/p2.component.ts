import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { EmployeeService } from '../../employee/services/employee.service';
import { IPertemuan2 } from './models/p2.model';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.scss'],
})
export class P2Component implements OnInit {
  form: FormGroup;

  nama: string = 'hello';
  nama2: string = 'hello2';

  items: IPertemuan2[] = [
    {
      id: 1,
      nama: 'Imal',
      kota: 'Medan',
    },
    {
      id: 2,
      nama: 'Zaya',
      kota: 'Medan',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.initForm();
    // const data = this.emplService.getEmployee()
    // console.log(data)
  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl(''),
      nama: new FormControl(''),
      kota: new FormControl(''),
    });
  }

  onEdit(event: IPertemuan2): void {

    this.form.patchValue(event);
    // this.form.controls.id.patchValue(event.id)
    // this.form.controls.nama.patchValue(event.nama)
    // this.form.get('kota').patchValue(event.kota)
  }

  onDelete(id: number): void {
    console.log(id);
    if (id) {
      alert('Mau di hapus ?');
      // logic
    }
  }

  onSubmit(): void {
    const data = this.form.value;
    this.items = [...this.items, data];
    console.log(this.items);
    console.log(this.form);
  }
}
