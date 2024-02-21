import {inject, Injectable} from "@angular/core";
import {Phone} from "../model/Phone";
import {PhoneService} from "./phone.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CartService {

  phoneService = inject(PhoneService);
  listPhones: Map<number, Phone[]>;
  phone: Observable<Phone> | undefined;

  constructor() {
    this.listPhones = new Map<number, Phone[]>();
  }

  addToCart(product: Phone) {
    if (!this.listPhones.has(product.id)) {
      this.listPhones.set(product.id, []);
    }
    this.listPhones.get(product.id)?.push(product);
  }

  getItems() {
    return this.listPhones;
  }

  clearCart() {
    this.listPhones.clear();
  }

  addQuantity(phoneId: number) {
    this.phoneService.getPhoneId(phoneId).subscribe(phone => {
      if (phone) {
        this.addToCart(phone);
      }
    });
  }

  removeQuantity(phoneId: number) {
    this.phoneService.getPhoneId(phoneId).subscribe(phone => {
      if (phone) {
        this.listPhones.get(phone.id)?.pop();
        if (this.listPhones.get(phone.id)?.length === 0) {
          this.listPhones.delete(phoneId);
        }
      }
    });
  }

}
