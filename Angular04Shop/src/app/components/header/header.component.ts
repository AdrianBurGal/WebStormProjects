import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Phone} from "../../model/Phone";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink='/'>
      <h1>My Store</h1>
    </a>
    <a routerLink="/cart" class="button fancy-button"><em class="material-icons">shopping_cart</em> {{ cart?.size}}
    </a>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() cart: Map<number, Phone[]> | undefined;
}
