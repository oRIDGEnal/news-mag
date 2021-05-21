import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadComponent } from './tophead/tophead.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsroomapiService } from './service/newsroomapiservice.service';
import { TechnewsComponent } from './technews/technews.component';
import { BiznewsComponent } from './biznews/biznews.component';
import { FinancenewsComponent } from './financenews/financenews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadComponent,
    TechnewsComponent,
    BiznewsComponent,
    FinancenewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsroomapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
