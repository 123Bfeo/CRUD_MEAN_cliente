import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//para conectar el cleinte con el servidor
import { HttpClientModule } from '@angular/common/http';
//@components
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { Error404Component } from './components/error404/error404.component';
/**
 * para manejo de notificaciones utilizo el module Toastr
 * 1 .instalamos
 * 2 .lo importamoes en el modulo raiz tiene las rutas:
      import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
      import { ToastrModule } from 'ngx-toastr';}
   3 . la importacion {
    imports: [
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
      ]
  4 . realizamos la configuracion en el Angular.json
    "styles": [
                "node_modules/ngx-toastr/toastr.css"
              ],
   }
 */
@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ListProductComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // para conectar el cliente con el servidor
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
