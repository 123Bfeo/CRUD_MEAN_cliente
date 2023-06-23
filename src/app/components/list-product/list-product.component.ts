import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  listProduct: Product[] = [];
  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.obtenerProduct();
  }
  obtenerProduct() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.listProduct = data;
        console.log(this.listProduct);
      },
      (error) => {
        console.warn(error);
      }
    );
  }
  deleteProduct(id: any) {
    console.log(id);
    this.productService.deleteProduct(id).subscribe(
      (data) => {
        this.toastr.error(
          'The product was successfully removed! 🤙',
          'Delete Product.'
        );
        this.obtenerProduct();
      },
      (error) => {
        console.warn(error);
        this.toastr.warning(
          'An error occurred in the process of removing product!',
          'Delete Product.'
        );
      }
    );
  }
}
