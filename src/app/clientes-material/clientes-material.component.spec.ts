import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesMaterialComponent } from './clientes-material.component';

describe('ClientesMaterialComponent', () => {
  let component: ClientesMaterialComponent;
  let fixture: ComponentFixture<ClientesMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
