import { Component, OnInit } from '@angular/core';
import { NewsroomapiService } from '../service/newsroomapiservice.service';

@Component({
  selector: 'app-biznews',
  templateUrl: './biznews.component.html',
  styleUrls: ['./biznews.component.scss']
})
export class BiznewsComponent implements OnInit {

  constructor(private _services:NewsroomapiService) { }

  bizNewsDisplay:any = [];

  ngOnInit(): void {
    this._services.bizHeadings().subscribe((result)=>{
      console.log();
      this.bizNewsDisplay = result.articles;
    })
  }

}
