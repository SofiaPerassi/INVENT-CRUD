import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesTableComponent } from './paquetes-table.component';

describe('PaquetesTableComponent', () => {
  let component: PaquetesTableComponent;
  let fixture: ComponentFixture<PaquetesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaquetesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaquetesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
