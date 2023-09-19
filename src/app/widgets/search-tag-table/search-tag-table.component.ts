import {Component} from '@angular/core';
import {EK_PesajeLinea} from "../entity/EK_PesajeLinea";
import {EkinDbReviewApiRestService} from "../services/ekin-db-review-api-rest.service";

@Component({
  selector: 'app-search-tag-table',
  templateUrl: './search-tag-table.component.html',
  styleUrls: ['./search-tag-table.component.css']
})
export class SearchTagTableComponent {

  registryList: EK_PesajeLinea[] = [];
  tagForm = "";
  loading = false;

  constructor(private service: EkinDbReviewApiRestService) {
  }

  searchDb() {
    this.loading = true;
    this.service.getRegistriesByTag(this.tagForm).subscribe(data => {
      this.registryList = data;
      this.loading = false;
    }, error => {
      console.log(error);
    })
  }

}
