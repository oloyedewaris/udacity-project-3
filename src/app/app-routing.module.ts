import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './pages/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:productId', component: ProductItemDetailComponent },
  { path: 'confirmation/:fullName/:price', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
