import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  titulo = 'Create Product';
  id: string | null;
  constructor(
    //inject dependence
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productService: ProductService,
    private aRouter: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      mark: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.isEdit();
  }

  addProduct() {
    const product: Product = {
      product: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      mark: this.productForm.get('mark')?.value,
      price: this.productForm.get('price')?.value,
    };
    if (this.id !== null) {
      this._productService.editProduct(this.id, product).subscribe(
        (data) => {
          this.toastr.info('product edit successfully !🥳😎', 'Edit product');
          this.router.navigate(['/']);
        },
        (error) => {
          this.toastr.error('Error Edit the product', 'Edit product');
          this.productForm.reset();
        }
      );
    } else {
      this._productService.createProduct(product).subscribe(
        (data) => {
          this.toastr.success(
            'product created successfully !🥳😎',
            'New product'
          );
          /*para redirteccionar desde la clase del compnente
          primero inyectamos la dependencia de router en el constructor
          y luego accedemos a esa dependecia e identificamos la ruta a la cual navegaremos
        */
          this.router.navigate(['/']);
        },
        (error) => {
          this.toastr.error('Error creating the product', 'New product');
          this.productForm.reset();
        }
      );
    }
  }
  isEdit() {
    if (this.id !== null) {
      this.titulo = 'Edit Product';
      this._productService.searchProduct(this.id).subscribe((data) => {
        this.productForm.setValue({
          product: data.product,
          category: data.category,
          mark: data.mark,
          price: data.price,
        });
      });
    }
  }
}
