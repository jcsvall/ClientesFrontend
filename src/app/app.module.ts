import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraMenuLatComponent } from './barra-menu-lat/barra-menu-lat.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesMaterialComponent } from './clientes-material/clientes-material.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DialogModule} from 'primeng/dialog';
import { ClienteAddEditComponent } from './cliente-add-edit/cliente-add-edit.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    BarraMenuLatComponent,
    ClientesComponent,
    ClientesMaterialComponent,
    ClienteAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    TableModule,
    MatTableModule,
    MatPaginatorModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    MatInputModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
