import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-clientes-material',
  templateUrl: './clientes-material.component.html',
  styleUrls: ['./clientes-material.component.css']
})
export class ClientesMaterialComponent implements OnInit {

  displayedColumns: string[] = ['id','nombres','apellidos','documento'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  id: number;
  nombres: string;
  apellidos: string;
  documento: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007934-8' },
  { id: 2, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02075850-8' },
  { id: 3, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
  { id: 4, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
  { id: 5, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
  { id: 6, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
  { id: 7, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
  { id: 8, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
  { id: 9, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
  { id: 10, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
  { id: 11, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' },
  { id: 12, nombres: 'Juan Carlos', apellidos: 'Serrano Valle', documento: '02007950-8' }
];