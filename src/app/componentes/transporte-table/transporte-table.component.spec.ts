import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteTableComponent } from './transporte-table.component';

describe('TransporteTableComponent', () => {
  let component: TransporteTableComponent;
  let fixture: ComponentFixture<TransporteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporteTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransporteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
