import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadComponent } from './tophead/tophead.component';
import { BiznewsComponent } from './biznews/biznews.component';
import { FinancenewsComponent } from './financenews/financenews.component';

const routes: Routes = [
  {path:'',component:TopheadComponent}, //home
  {path:'tech',component:TechnewsComponent}, //tech news
  {path:'biz',component:BiznewsComponent}, //biz news
  {path:'fin',component:FinancenewsComponent}, //fin news
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
