import {Component, OnInit} from '@angular/core';
import {EkinDbReviewApiRestService} from "../../services/ekin-db-review-api-rest.service";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-card-lotes-with-errors',
  templateUrl: './card-lotes-with-errors.component.html',
  styleUrls: ['./card-lotes-with-errors.component.css']
})
export class CardLotesWithErrorsComponent implements OnInit {

  cantLotesConErrores = "LOADING";
  cantLotesConErroresUltimaVersion = "LOADING";

  constructor(private service: EkinDbReviewApiRestService, private configService: ConfigService) {
  }

  ngOnInit(): void {
    this.getLotesWithErrors();
  }

  getLotesWithErrors() {
    this.configService.getConfig().subscribe((data: any) => {
      this.service.getCountLotesConErrores(new Date(data.lastEkinsaSoftwareInstallDate), new Date()).subscribe(data => {
        this.cantLotesConErrores = <string>data;
      }, error => {
        console.log(error);
      });
      this.service.getCountLotesConErrores(new Date(data.initLastEkinsaSoftwareRevisionDate), new Date()).subscribe(data => {
        this.cantLotesConErroresUltimaVersion = '+' + <string>data;
      }, error => {
        console.log(error);
      });
    });
  }


}
