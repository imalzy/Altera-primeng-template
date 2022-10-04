import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPertemuan2 } from '../p2/models/p2.model';

@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.scss']
})
export class P4Component implements OnInit {
  form: FormGroup;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.initForm();
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
    // this.items = [...this.items, data];
    // console.log(this.items);
    // console.log(this.form);
    this.storeService.postData(data);
    this.form.reset();
  }

}
