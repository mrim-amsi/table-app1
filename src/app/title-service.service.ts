import { Injectable } from '@angular/core';
interface Country {
  id: string;
  date: string;
  docDate: string;
  total: number;
  currency: string;
  status: string | any;
}
@Injectable({
  providedIn: 'root'
})
export class TitleServiceService {
title ='';
 statues = ["Waiting", "Closed", "Canceled", "darft", "open"];
 id='';

  Country:Country={id: this.id,
  date: `name 1`,
  docDate: `${new Date().toLocaleDateString()}`,
  total: 500000,
  currency: "USD",
  status:  this.statues[Math.floor(Math.random() * this.statues.length) || 2]};
  constructor() { }
}
