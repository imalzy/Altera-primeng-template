import { ECommerceService } from './../services/e-commerce.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private eCommerceService: ECommerceService) {}

  ngOnInit(): void {
    const data = {
      name: 'Sony PS5',
      description: 'play has no limits',
      price: 299,
      categories: [2],
    };
    this.eCommerceService.postProduct(data).subscribe((res) => {
      console.log(res);
    });
  }
}
