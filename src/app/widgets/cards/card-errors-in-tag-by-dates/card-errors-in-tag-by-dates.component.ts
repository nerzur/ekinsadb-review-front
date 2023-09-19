import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EkinDbReviewApiRestService} from "../../services/ekin-db-review-api-rest.service";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-card-errors-in-tag-by-dates',
  templateUrl: './card-errors-in-tag-by-dates.component.html',
  styleUrls: ['./card-errors-in-tag-by-dates.component.css']
})
export class CardErrorsInTagByDatesComponent implements OnInit {

  cantErrorTag = "";
  cantNewErrors = "";
  errorType = "";

  constructor(private service: EkinDbReviewApiRestService, private configService: ConfigService) {
  }

  getErrorsInTag() {
    this.configService.getConfig().subscribe((data: any) => {
      this.service.getCountErrorsInTag(new Date(data.lastEkinsaSoftwareInstallDate), new Date()).subscribe(data => {
        this.cantErrorTag = <string>data;
      }, error => {
        console.log(error);
      });
    });
    let tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - 1);
    this.service.getCountErrorsInTag(new Date('2023-08-24'), tempDate).subscribe(data => {
      this.cantNewErrors = ((data - 5 == 0) ? '' : '+') + ((<number>data) - 5);
      this.errorType = (data - 5 == 0) ? 'success' : 'danger';
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getErrorsInTag();
  }


}
