import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.component.html',
  styleUrls: ['./cliente-add-edit.component.css']
})
export class ClienteAddEditComponent implements OnInit {

  clientes: any[] = [
    { id: 1, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007934-8' },
    { id: 2, nombres: 'Pedro Alfredo', apellidos: 'Canales', documento: '12345123-8' },
    { id: 3, nombres: 'Roberto', apellidos: 'Flores', documento: '12334343-8' },
    { id: 4, nombres: 'Reynaldo Alonso', apellidos: 'Beltran Flores', documento: '12345322-9' },
    { id: 5, nombres: 'Armando', apellidos: 'Flores Vasquez', documento: '89823233-8' },
    { id: 6, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '19202932-7' },
    { id: 7, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '12383839-8' },
    { id: 8, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '12392922-8' },
    { id: 9, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007250-8' },
    { id: 10, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '12323232-2' },
    { id: 11, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02001232-4' },
    { id: 12, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02001222-6' }
  ];

  edicion: boolean;

  public objeto = { id: null, nombres: null, apellidos: null, documento: null };

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    let id: number = (Number)(this._route.snapshot.paramMap.get('id'));
    this.edicion = false;

    if (id != 0) {
      this.edicion = true;
      const resultado = this.clientes.find(cl => cl.id === id);
      this.objeto.id = id;
      this.objeto.nombres = resultado.nombres;
      this.objeto.apellidos = resultado.apellidos;
      this.objeto.documento = resultado.documento;
    }
  }

}
