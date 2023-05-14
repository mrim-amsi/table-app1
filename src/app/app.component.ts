import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TitleServiceService } from './title-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  page = 1;
  pageSize = 13;
  title='';
  constructor(public titleService:TitleServiceService) {
  }
  ngOnInit(): void {
    this.titleService.title="Invoice";
  }
}
