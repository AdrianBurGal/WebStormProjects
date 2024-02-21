import {Component, inject} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {CardMobileComponent} from "./components/card-mobile/card-mobile.component";
import {DetailsMobileComponent} from "./components/details-mobile/details-mobile.component";
import {DetailsProviderComponent} from "./components/details-provider/details-provider.component";
import {ListMobileComponent} from "./components/list-mobile/list-mobile.component";
import {CartComponent} from "./components/cart/cart.component";
import {Phone} from "./model/Phone";
import {CartService} from "./service/cart.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet,
    CardMobileComponent, DetailsMobileComponent,
    DetailsProviderComponent, ListMobileComponent,
    CartComponent],
  template: `
    <main>
      <app-header [cart]="cart"/>
      <section class="content">
        <router-outlet/>
      </section>
    </main>
  `,
  styles: ''
})
export class AppComponent {
  cartService = inject(CartService);
  cart: Map<number, Phone[]> = this.cartService.getItems();
}
