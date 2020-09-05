import { Component, OnInit, Input } from '@angular/core';

import {MatTableModule} from '@angular/material/table';

export interface Assignments {
  check: boolean;
  name: string;
  dueDate: string;
  difficulty: string;
  class: string;
}

const Assignment_DATA: Assignments[] = [
  {check: false, name: 'Book Report', dueDate: '8/27', difficulty: 'Medium', class: 'English'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['check', 'name', 'dueDate', 'difficulty', 'class'];
  dataSource = Assignment_DATA;

  @Input() event: any;

  constructor() { }

  ngOnInit(): void {
  }

}
