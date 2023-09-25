import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../widgets/services/config.service";
import {Message} from "primeng/api";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  lastEkinsaSoftwareVersion = "";
  lastEkinsaSoftwareInstallDate = "";

  messages: Message[] = [];


  constructor(private configService: ConfigService) {
  }

  ngOnInit(): void {
    this.configService.getConfig().subscribe((data: any) => {
      this.lastEkinsaSoftwareInstallDate = data.lastEkinsaSoftwareInstallDate;
      this.lastEkinsaSoftwareVersion = data.lastEkinsaSoftwareVersion;
      this.messages = [{
        severity: 'warn', summary: 'Warning',
        detail: 'This page is under develop. Last Ekinsa\'s software version ' + this.lastEkinsaSoftwareVersion + ' of ' + this.lastEkinsaSoftwareInstallDate
      }
      ];
    })
  }


}
