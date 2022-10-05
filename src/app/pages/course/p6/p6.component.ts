import { IPost } from './../model/post.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { PostService } from '../service/post.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p6',
  templateUrl: './p6.component.html',
  styleUrls: ['./p6.component.scss'],
  // providers: [PostService],
})
export class P6Component implements OnInit, OnDestroy {
  items$: Observable<any[]>;
  private ngUnsubscribe = new Subject();
  items: IPost[] = [];

  display: boolean = false;

  userId: string;
  title: string;
  message: string;

  constructor(private postService: PostService, private toast: ToastrService, private router:Router) {}

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh(): void {
    // this.postService.getPost().subscribe((res) => {
    //   console.log(res);
    // });

    // this.postService.getPost().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
    //   (next) => {
    //     console.log(next)
    //   },
    //   (error) => {
    //     console.log(error)
    //     if(error.status === 404){
    //       this.toast.error(error.message, "Error")
    //       }
    //   },
    //   () => {
    //   }
    // )

    this.items$ = this.postService.getPost();
  }

  addData(): void {
    const body = {
      userId: parseInt(this.userId),
      title: this.title,
      body: this.message
    }

    this.postService.postData(body).subscribe(res=>{
      console.log(res)
    }, err=>{
      console.log(err)
    });
  }

  showDialog() {
    this.display = true;
  }

  editProduct(product:IPost):void{
    this.router.navigateByUrl(`course/edit/${product.id}`)
  }

  ngOnDestroy(): void {}
}
