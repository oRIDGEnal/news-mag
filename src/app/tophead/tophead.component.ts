import { Component, OnInit } from '@angular/core';
import { NewsroomapiService } from '../service/newsroomapiservice.service';

@Component({
  selector: 'app-tophead',
  templateUrl: './tophead.component.html',
  styleUrls: ['./tophead.component.scss']
})
export class TopheadComponent implements OnInit {

  constructor(private _services:NewsroomapiService) { }

  // Display data
  topheadDisplay:any = [];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadDisplay = result.articles;
    })
  }

}
