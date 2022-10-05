import { PostService } from './../../service/post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  // providers: [PostService],
})
export class EditFormComponent implements OnInit {
  paramId:string = '';
  private ngUnsubsribe = new Subject();
  private subs:Subscription
  constructor(private actRoute: ActivatedRoute, private postService:PostService) { }

  ngOnInit(): void {
    // this.actRoute.params.subscribe(param=>{
    //   this.paramId = param.id;
    // })

    // if(this.paramId !== ''){
    //   this.postService.getById(this.paramId).subscribe(res=>{
    //     console.log(res)
    //   })
    // }

    // this.actRoute.params.pipe(
    //   switchMap(param=> this.postService.getById(param?.id)),
    //   takeUntil(this.ngUnsubsribe)
    // ).subscribe(res=>{
    //   console.log(res)
    // })

    this.subs = this.actRoute.data.subscribe(res=>{
      console.log(res)
    })

  }

  OnDestroy():void{
    this.subs.unsubscribe()
  }



}
