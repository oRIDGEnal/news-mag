import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsroomapiService } from '../service/newsroomapiservice.service';

@Component({
  selector: 'app-financenews',
  templateUrl: './financenews.component.html',
  styleUrls: ['./financenews.component.scss']
})
export class FinancenewsComponent implements OnInit {

  constructor(private _services:NewsroomapiService) { }

  finnewsDisplay:any = [];

  ngOnInit(): void {
    this._services.finHeadings().subscribe((result)=>{
      console.log();
      this.finnewsDisplay = result.articles;
    })
  }

}
