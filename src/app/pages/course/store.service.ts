import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IPertemuan2 } from './p2/models/p2.model';

@Injectable()
export class StoreService {
  private data: IPertemuan2[] = [];
  public items$: BehaviorSubject<IPertemuan2[]> = new BehaviorSubject<
    IPertemuan2[]
  >([]);
  constructor() {
    this.getData();
  }

  getData():void {
    this.data.push(
      {
        id: 1,
        nama: 'Imal',
        kota: 'Medan',
      },
      {
        id: 2,
        nama: 'Zaya',
        kota: 'Medan',
      }
    );

    this.items$.next(this.data);
  }

  postData(obj: IPertemuan2): void {
    this.data = [...this.data, obj];
    console.log(this.data);
    this.items$.next(this.data)
  }
}
