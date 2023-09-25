import {Component, OnInit} from '@angular/core';
import {EkinDbReviewApiRestService} from "../../services/ekin-db-review-api-rest.service";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-card-pesajes-linea-total',
  templateUrl: './card-pesajes-linea-total.component.html',
  styleUrls: ['./card-pesajes-linea-total.component.css']
})
export class CardPesajesLineaTotalComponent implements OnInit {

  cantPesadasToday = "LOADING";
  cantPesadasLastVersion = "LOADING";
  cantPesadasLastRevision = "LOADING";

  constructor(private service: EkinDbReviewApiRestService, private configService: ConfigService) {
  }

  ngOnInit(): void {
    this.service.getDbEntriesToday().subscribe(data => {
      this.cantPesadasToday = data;
    }, error => {
      console.log(error);
    });
    this.configService.getConfig().subscribe((data: any) => {
      this.service.getPalletsProcessedInRangeDates(new Date(data.lastEkinsaSoftwareInstallDate)).subscribe(data => {
        this.cantPesadasLastVersion = <string>data;
      }, error => {
        console.log(error);
      });
      this.service.getPalletsProcessedInRangeDates(new Date(data.initLastEkinsaSoftwareRevisionDate)).subscribe(data => {
        this.cantPesadasLastRevision = <string>data;
      }, error => {
        console.log(error);
      });
    });
  }


}
