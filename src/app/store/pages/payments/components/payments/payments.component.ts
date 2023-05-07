import { Component, OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleServiceService } from 'src/app/title-service.service';

interface Country {
  id: number;
  date: string;
  docDate: string;
  total: number;
  currency: string;
  status: string | any;
}

let COUNTRIES: Country[] = [] //[
let statues = ["Waiting", "Closed", "Canceled", "darft", "open"];
for (let o = 1; o <= 39; o++) {
  COUNTRIES.push({
    id: Number(Math.random().toString().slice(2, 9)),
    date: `name ${o}`,
    docDate: `${new Date().toLocaleDateString()}`,
    total: 500000,
    currency: "USD",
    status:  statues[Math.floor(Math.random() * statues.length) || 2]
})}

// {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// },
// {
//   id: 3456789,
//   date: "Name 2",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 3",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// },
// {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// },
// {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// },
// {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// },
// {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 1",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 38",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// }, {
//   id: 3456789,
//   date: "Name 39",
//   docDate: `10 / 5 /2023`,
//   total: 500000,
//   currency: "USD",
//   status: "Open"
// },
// ];

// COUNTRIES
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit{
  page = 1;
  pageSize = 13;
  collectionSize = COUNTRIES.length;
  countries: Country[] = [];

  constructor(public titleService:TitleServiceService) {
    this.refreshCountries();

      }
  ngOnInit(): void {
    this.titleService.title="Payments";
  }

  refreshCountries() {
    this.countries = COUNTRIES.map((country, i) => ({ ...country })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
