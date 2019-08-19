import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  ontenerClientes(){
    return [
      { id: 1, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
      { id: 2, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02075850-8' }
    ];
  }

}
