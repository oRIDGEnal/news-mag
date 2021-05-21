import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsroomapiService } from '../service/newsroomapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsroomapiService) { }

  technewsDisplay:any = [];

  ngOnInit(): void {
    this._services.techHeadings().subscribe((result)=>{
      console.log();
      this.technewsDisplay = result.articles;
    })
  }

}
