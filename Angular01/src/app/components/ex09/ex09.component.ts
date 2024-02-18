import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Employee} from "../../models/Employee";

@Component({
  selector: 'app-ex09',
  imports: [
    NgForOf
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {

  employees: Employee[] = [];

  constructor() { }

  /*ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;
  }*/
}

