import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductListComponent} from "../product-list/product-list.component";
import {HeaderComponent} from "../header/header.component";
import {ProductAlertsComponent} from "../product-alerts/product-alerts.component";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {CartComponent} from "../cart/cart.component";
import {HttpClientModule} from "@angular/common/http";
import {ShippingComponent} from "../shipping/shipping.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ProductListComponent,
    HeaderComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    HttpClientModule,
    ShippingComponent],
  templateUrl: `./app.component.html`,
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'Angular03Shop';
}
