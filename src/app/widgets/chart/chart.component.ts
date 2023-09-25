import {Component, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {EkinDbReviewApiRestService} from "../services/ekin-db-review-api-rest.service";
import {CountEntriesByDates} from "../entity/countEntriesByDates";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {


  constructor(private service: EkinDbReviewApiRestService) {
  }

  ngOnInit() {
    // this.gradient?.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
    // this.gradient?.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
    // this.gradient?.addColorStop(0, 'rgba(94, 114, 228, 0)');
    this.service.CountEntriesByDates().subscribe((data: CountEntriesByDates[]) => {
      let labels: string[] = [];
      let values: number[] = [];
      let month: string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

      for (let datum of data) {
        labels.push(month[datum.monthEntries - 1] + '-' + datum.yearEntries);
        values.push(datum.cantidadRegistros);
      }
      this.lineChartData = {
        labels: labels,
        datasets: [{
          label: "Tags procesados por Mes",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 0,
          borderColor: "#5e72e4",
          backgroundColor: "#91a4ee",
          fill: true,
          data: values,
          maxBarThickness: 6
        }],
      };
    }, error => {
      console.log(error);
    })
  }

  // gradient?: CanvasGradient = this.chart?.chart?.ctx.createLinearGradient(0, 230, 0, 50);

  public lineChartData: ChartConfiguration['data'] = {
    labels: [""],
    datasets: [{
      label: "Loading",
      tension: 0.4,
      borderWidth: 0,
      pointRadius: 0,
      borderColor: "#5e72e4",
      backgroundColor: "#91a4ee",
      fill: true,
      data: [0],
      maxBarThickness: 6
    }],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#fbfbfb',
          font: {
            size: 11,
            family: "Open Sans",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          color: '#ccc',
          padding: 20,
          font: {
            size: 11,
            family: "Open Sans",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}
