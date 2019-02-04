import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  alert = 'alert-danger';
  properties = {
    danger: false,
  };
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  execute() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
