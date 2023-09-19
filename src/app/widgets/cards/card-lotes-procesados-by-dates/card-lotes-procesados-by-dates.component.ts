import {Component, OnInit} from '@angular/core';
import {EkinDbReviewApiRestService} from "../../services/ekin-db-review-api-rest.service";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-card-lotes-procesados-by-dates',
  templateUrl: './card-lotes-procesados-by-dates.component.html',
  styleUrls: ['./card-lotes-procesados-by-dates.component.css']
})
export class CardLotesProcesadosByDatesComponent implements OnInit {

  cantLotesProcesados = "";
  cantLotesConErrores = "LOADING";

  constructor(private service: EkinDbReviewApiRestService, private configService: ConfigService) {
  }

  getLotesProcesados() {
    this.configService.getConfig().subscribe((data: any) => {
      this.service.getCountLotesProcesados(new Date(data.lastEkinsaSoftwareInstallDate), new Date()).subscribe(data => {
        this.cantLotesProcesados = <string>data;
      }, error => {
        console.log(error);
      });
      this.service.getCountLotesConErrores(new Date(data.lastEkinsaSoftwareInstallDate), new Date()).subscribe(data=>{
        this.cantLotesConErrores = <string>data;
      }, error => {
        console.log(error);
      });
    });
  }

  getLotesConErrores(){

  }

  ngOnInit(): void {
    this.getLotesProcesados()
  }
}
