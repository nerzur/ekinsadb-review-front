import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class EkinDbReviewApiRestService {

  dateFormat : string= 'yyyy-MM-dd';

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getDbEntries(): Observable<any> {
    return this.http.get("http://localhost:8091/pesajesLinea");
  }

  getDbEntriesToday(): Observable<any> {
    return this.http.get("http://localhost:8091/pesajesLinea/pesajesToday");
  }

  getPalletsProcessedInRangeDates(startDate: Date): Observable<any> {
    return this.http.get("http://localhost:8091/pesajesLinea/countPesajesAfterDate?startDate="
      + this.convertDate(startDate, this.dateFormat));
  }

  getErrorsByDates(startDate: Date, endDate: Date): Observable<any> {
    // return this.http.get("http://localhost:8091/pesajesLinea/listAllPesajesWithErrorsInZoneByDates?startDate="
    return this.http.get("http://localhost:8091/pesajesLinea/pesajesErroresZonaInRangeDate?startDate="
      + this.convertDate(startDate, this.dateFormat) + "&endDate="
      + this.convertDate(endDate, this.dateFormat));
  }

  getCountLotesProcesados(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get("http://localhost:8091/pesajesLinea/countLotesByDates?startDate="
      + this.convertDate(startDate, this.dateFormat) + "&endDate="
      + this.convertDate(endDate, this.dateFormat));
  }

  getCountLotesConErrores(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get("http://localhost:8091/pesajesLinea/countLotesWithErrorsInTagByDates?startDate="
      + this.convertDate(startDate, this.dateFormat) + "&endDate="
      + this.convertDate(endDate, this.dateFormat));
  }

  getCountErrorsInTag(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get("http://localhost:8091/pesajesLinea/countErrorsInTagByDates?startDate="
      + this.convertDate(startDate, this.dateFormat) + "&endDate="
      + this.convertDate(endDate, this.dateFormat));
  }

  getRegistriesByTag(tag:string):Observable<any>{
    return this.http.get("http://localhost:8091/pesajesLinea/findEkPesajesLineaByTag?tag="+tag);
  }

  convertDate(date: Date, format: string): string {
    return <string>this.datePipe.transform(date, format)
  }



}
