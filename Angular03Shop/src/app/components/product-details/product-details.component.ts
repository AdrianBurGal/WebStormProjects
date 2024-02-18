import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../../../assets/products";
import {CurrencyPipe, NgIf} from "@angular/common";
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const productID = Number(routeParams.get("productId"));

    this.product = products.find(product => product.id === productID);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
