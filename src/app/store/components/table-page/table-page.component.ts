import { Component, OnInit } from '@angular/core';
import { TitleServiceService } from 'src/app/title-service.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent  implements OnInit{
  constructor(public titleService:TitleServiceService) {
      }
  ngOnInit(): void {
    this.titleService.title="Home";
  }
}