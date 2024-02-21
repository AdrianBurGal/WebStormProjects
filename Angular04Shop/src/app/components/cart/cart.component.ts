import {Component, inject, Input} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {NgForOf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {Phone} from "../../model/Phone";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgForOf, ReactiveFormsModule],
  template: `
    <section id="containerCart">
      <h3>Cart</h3>
      <div *ngFor="let item of cart.entries()">
        <div id="item" class="cart-item">
          <span>{{ item[1][0].name }}</span>
          <button class="button" type="submit" (click)="removeQuantity(item[0])">-</button>
          <span>{{ item[1].length }}</span>
          <button class="button" type="submit" (click)="addQuantity(item[0])">+</button>
        </div>
      </div>

      <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
        <div>
          <label for="name">Name</label>
          <input id="name" type="text" formControlName="name">
        </div>
        <div>
          <label for="address">Address</label>
          <input id="address" type="text" formControlName="address">
        </div>
        <button class="button" type="submit">Purchase</button>
      </form>

    </section>
  `,
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService);
  cart = this.cartService.getItems();

  checkoutForm =
    this.formBuilder.group({
      name: '', address: ''
    });

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  addQuantity(phoneId: number) {
    this.cartService.addQuantity(phoneId);
  }

  removeQuantity(phoneId: number) {
    this.cartService.removeQuantity(phoneId);
  }
}
