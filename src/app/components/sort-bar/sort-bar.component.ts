import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.css']
})
export class SortBarComponent {
  options = ['Highest Price','Lower Price']
}
