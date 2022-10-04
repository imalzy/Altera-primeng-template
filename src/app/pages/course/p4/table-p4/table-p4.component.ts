import { IPertemuan2 } from './../../p2/models/p2.model';
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { StoreService } from '../../store.service';
import { Subscription, Subject, takeUntil, Observable } from 'rxjs';

@Component({
  selector: 'app-table-p4',
  templateUrl: './table-p4.component.html',
  styleUrls: ['./table-p4.component.scss']
})
export class TableP4Component implements OnInit, OnDestroy, OnChanges {
  items:IPertemuan2[];
  private subs:Subscription;
  private ngUnsubscribe = new Subject();
  items$: Observable<IPertemuan2[]>
  constructor(private storeService:StoreService) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    this.items$ = this.storeService.items$;
    // this.versiSub()
  }

  versiSub():void{
    // this.subs = this.storeService.items$.subscribe(res=>{
    //   this.items = res;
    // })

    // this.storeService.getData().pipe(takeUntil(this.ngUnsubscribe)).subscribe(res=>{
    //   this.items = res;
    // })
  }


  ngOnDestroy(): void {
    // this.subs.unsubscribe();
    // this.subs = null;

    // this.ngUnsubscribe.next(null);
    // this.ngUnsubscribe.complete()
  }

}
