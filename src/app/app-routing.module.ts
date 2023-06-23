import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { Error404Component } from './components/error404/error404.component';
import { ListProductComponent } from './components/list-product/list-product.component';
const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
  },
  {
    path: 'edit-product/:id',
    component: CreateProductComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
