import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresTableComponent } from './trabajadores-table.component';

describe('TrabajadoresTableComponent', () => {
  let component: TrabajadoresTableComponent;
  let fixture: ComponentFixture<TrabajadoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadoresTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
