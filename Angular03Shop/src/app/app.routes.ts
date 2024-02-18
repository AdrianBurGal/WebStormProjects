import {Routes} from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {CartComponent} from "./components/cart/cart.component";
import {ShippingComponent} from "./components/shipping/shipping.component";

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
  },
  {
    path: 'shipping',
    component: ShippingComponent,
    title: 'Shipping'
  },
  // {
  //   path: 'providers/:providerName',
  //   component: ProvidersComponent,
  //   title: 'Providers'
  // },
];


