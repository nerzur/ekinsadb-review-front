import {Component, OnInit} from '@angular/core';
import {EntriesList} from "../entity/EntriesList";
import {EkinDbReviewApiRestService} from "../services/ekin-db-review-api-rest.service";
import {DatePipe} from "@angular/common";
import {end} from "@popperjs/core";
import {PrimeNGConfig} from "primeng/api";
import {ConfigService} from "../services/config.service";
import {Entry} from "../entity/Entry";
import {EK_PesajeLinea} from "../entity/EK_PesajeLinea";

@Component({
  selector: 'app-table-ekin-data-errors-review-prime-ng',
  templateUrl: './table-ekin-data-errors-review-prime-ng.component.html',
  styleUrls: ['./table-ekin-data-errors-review-prime-ng.component.css']
})
export class TableEkinDataErrorsReviewPrimeNgComponent implements OnInit {
  entriesList: EntriesList[] = [];
  loading: boolean = false;
  dateRange: Date[] = [];
  datesMinMax: Date[] = [];
  dialogVisible: boolean = false;

  tagDialogHeader = "";
  dialogEntries : EK_PesajeLinea[] = [];
  loadingDialog: boolean = false;


  constructor(private service: EkinDbReviewApiRestService,
              private configService: ConfigService,
              private datePipe: DatePipe,
              private primeConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    let minDate = new Date();
    this.configService.getConfig().subscribe((data: any) => {
      minDate = new Date(data.lastEkinsaSoftwareInstallDate);
      minDate.setDate(minDate.getDate() + 1);
      this.datesMinMax.push(minDate, new Date());
      this.dateRange = [new Date('2023-08-24'), new Date()];
      this.searchDb();
    }, error => {
      console.log(error);
    });

    this.primeConfig.setTranslation({
      today: "Hoy",
      clear: "Limpiar",
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      dayNamesMin: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']
    });
  }

  searchDb() {
    if (this.dateRange.length != 2) {
      console.log("ERRORS IN FORM");
      return;
    }
    this.loading = true;
    this.service.getErrorsByDates(this.dateRange[0], this.dateRange[1]).subscribe(data => {
      this.entriesList = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }

  missingZone(zone: any) {
    switch (zone) {
      case 1:
        return 2;
      case 2:
        return 1;
      case 3:
        return 4;
      case 4:
        return 3;
      default:
        return "";
    }
  }

  showDialog(tag: string) {
    this.tagDialogHeader = tag;
    this.dialogVisible = true;
    this.loadingDialog = true;
    this.service.getRegistriesByTag(tag).subscribe(data=>{
      console.log(data);
      this.dialogEntries = data;
      this.loadingDialog = false;
    })

  }
}
