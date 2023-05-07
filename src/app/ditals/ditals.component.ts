import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleServiceService } from '../title-service.service';

@Component({
  selector: 'app-ditals',
  templateUrl: './ditals.component.html',
  styleUrls: ['./ditals.component.scss']
})


export class DitalsComponent  implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public titleService:TitleServiceService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
       this.titleService.id= 'invoice :'+params.get('id')! ;
        console.log(this.titleService.id)     
    });
  }

}
