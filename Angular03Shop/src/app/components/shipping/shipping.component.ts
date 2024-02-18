import {Component} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {AsyncPipe, CurrencyPipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    AsyncPipe
  ],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent {

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
