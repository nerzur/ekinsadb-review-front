import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../widgets/services/config.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{

  lastEkinsaSoftwareVersion = "";
  lastEkinsaSoftwareInstallDate = "";


  constructor(private configService: ConfigService) {  }

  ngOnInit(): void {
    this.configService.getConfig().subscribe((data: any)=>{
      this.lastEkinsaSoftwareInstallDate = data.lastEkinsaSoftwareInstallDate;
      this.lastEkinsaSoftwareVersion = data.lastEkinsaSoftwareVersion;
    })
  }



}
