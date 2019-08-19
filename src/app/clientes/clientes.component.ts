import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [MessageService]
})
export class ClientesComponent implements OnInit {

  msgs: Message[] = [];

  clientes: any[];

  display: boolean = false;

  constructor(private clientesServicio: ClientesService,private messageService: MessageService) { }

  ngOnInit() {
    this.clientes = [
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
    //this.recuperarClientes();
  }

  public recuperarClientes(): void {
    //this.clientes=this.clientesServicio.ontenerClientes();
    //this.clientesServicio.ontenerClientes().subscribe(result => this.clientes = result);
  }

  selectCarWithButton(cliente: string) {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Exito', detail:JSON.stringify(cliente)});
    this.display = true;
}

}
