import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import {WidgetsModule} from "../widgets/widgets.module";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    TableComponent
  ],
  imports: [
    WidgetsModule,
    CommonModule,
    PagesRoutingModule,
    NgbAlert
  ]
})
export class PagesModule { }
