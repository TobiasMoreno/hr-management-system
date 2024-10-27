import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export default class ReportsComponent {
  attendanceData = [
    {
      "name": "John",
      "value": 20
    },
    {
      "name": "Alice",
      "value": 18
    },
    {
      "name": "Bob",
      "value": 15
    },
    {
      "name": "Claire",
      "value": 22
    }
  ];

  view: [number, number] = [700, 400]; // Tamaño del gráfico
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Employee';
  showYAxisLabel = true;
  yAxisLabel = 'Attendance (Days)';
}
