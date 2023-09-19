import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, NgOptimizedImage} from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { ChartComponent } from './chart/chart.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {NgChartsModule} from "ng2-charts";
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import { PageConfiguratorComponent } from './page-configurator/page-configurator.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {EkinDbReviewApiRestService} from "./services/ekin-db-review-api-rest.service";
import {HttpClientModule} from "@angular/common/http";
import { CardPesajesLineaTotalComponent } from './cards/card-pesajes-linea-total/card-pesajes-linea-total.component';
import { TableEkinDataErrorsReviewPrimeNgComponent } from './table-ekin-data-errors-review-prime-ng/table-ekin-data-errors-review-prime-ng.component';
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import { CardLotesProcesadosByDatesComponent } from './cards/card-lotes-procesados-by-dates/card-lotes-procesados-by-dates.component';
import { CardErrorsInTagByDatesComponent } from './cards/card-errors-in-tag-by-dates/card-errors-in-tag-by-dates.component';
import {ConfigService} from "./services/config.service";
import {DividerModule} from "primeng/divider";
import {DialogModule} from "primeng/dialog";
import { SearchTagTableComponent } from './search-tag-table/search-tag-table.component';
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    Error404Component,
    ChartComponent,
    CarouselComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PageConfiguratorComponent,
    CardPesajesLineaTotalComponent,
    TableEkinDataErrorsReviewPrimeNgComponent,
    CardLotesProcesadosByDatesComponent,
    CardErrorsInTagByDatesComponent,
    SearchTagTableComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    NgbCarousel,
    NgOptimizedImage,
    NgbSlide,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    TableModule,
    CalendarModule,
    FormsModule,
    DividerModule,
    DialogModule
  ],
  exports: [
    ChartComponent,
    CarouselComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PageConfiguratorComponent,
    TableEkinDataErrorsReviewPrimeNgComponent,
    CardPesajesLineaTotalComponent,
    CardLotesProcesadosByDatesComponent,
    CardErrorsInTagByDatesComponent,
    SearchTagTableComponent
  ],
  providers: [
    EkinDbReviewApiRestService,
    ConfigService,
    DatePipe
  ]
})
export class WidgetsModule { }
