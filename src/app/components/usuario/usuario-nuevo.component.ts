import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html'
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private _router: ActivatedRoute) {
    this._router.parent.params.subscribe(params => {
      console.log('RUTA HIJA');
      console.log(params['id']);
    });
  }
  ngOnInit() {
  }

}
