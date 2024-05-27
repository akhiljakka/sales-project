import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  salesPersonList:SalesPerson[] = [
    new SalesPerson("Akhil","Jakka","akhil.jakka@gmail.com",1000000),
    new SalesPerson("Teju","Jakka","Teju.jakka@gmail.com",1000000),
    new SalesPerson("Kandan","Rajendran","Kandu.raj@gmail.com",48.5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
