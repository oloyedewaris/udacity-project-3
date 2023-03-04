import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './pages/product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/cart/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemDetailComponent,
    ProductItemComponent,
    ProductListComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
