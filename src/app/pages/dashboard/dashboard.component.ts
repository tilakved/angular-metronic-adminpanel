import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
// @ts-ignore
import {constructor} from "zone.js";
import {HelperService} from "../../core/services/helper/helper.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public helper: HelperService) {
  }

  columns: any = [
    {key: 'id', title: "ID"},
    {key: 'name', title: 'Name'},
    {key: 'phone', title: 'Phone'},
    {key: 'company', title: 'Company'}
  ]
  data: any = [
    {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }, {
      "id": "1",
      "name": "Warren",
      "phone": "1-412-485-9725",
      "company": "Etiam Institute"
    }
  ]
  options: any

  ngOnInit(): void {
    const ctx: any = document.getElementById('kt_mixed_widget_6_chart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: '# of entries',
          data: [12, 19, 3, 15, 25, 13, 2],
          backgroundColor: [
            '#fff'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
