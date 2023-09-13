import {Component, OnInit} from '@angular/core';
import {EkinDbReviewApiRestService} from "../../services/ekin-db-review-api-rest.service";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-card-pesajes-linea-total',
  templateUrl: './card-pesajes-linea-total.component.html',
  styleUrls: ['./card-pesajes-linea-total.component.css']
})
export class CardPesajesLineaTotalComponent implements OnInit{

  cantPesadas  = "";
  cantPesadasToday  = "";
  cantPesadasLastVersion = "";

  constructor(private service: EkinDbReviewApiRestService, private configService: ConfigService) {
  }

  ngOnInit(): void {
    this.service.getDbEntries().subscribe(data=>{
      this.cantPesadas = data;
    });
    this.service.getDbEntriesToday().subscribe(data=>{
      this.cantPesadasToday = data;
    });
    this.configService.getConfig().subscribe((data: any) => {
      this.service.getPalletsProcessedInRangeDates(new Date(data.lastEkinsaSoftwareInstallDate)).subscribe(data => {
        this.cantPesadasLastVersion = <string>data;
      });
    });
  }


}
