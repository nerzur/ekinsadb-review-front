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
import { CardLotesWithErrorsComponent } from './cards/card-lotes-with-errors/card-lotes-with-errors.component';
import {RippleModule} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {BadgeModule} from "primeng/badge";


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
    CardLotesWithErrorsComponent,
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
    DialogModule,
    RippleModule,
    TooltipModule,
    ToastModule,
    BadgeModule,
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
    CardLotesWithErrorsComponent,
    SearchTagTableComponent
  ],
  providers: [
    EkinDbReviewApiRestService,
    ConfigService,
    DatePipe,
    MessageService
  ]
})
export class WidgetsModule { }
