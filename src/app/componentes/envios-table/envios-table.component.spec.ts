import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviosTableComponent } from './envios-table.component';

describe('EnviosTableComponent', () => {
  let component: EnviosTableComponent;
  let fixture: ComponentFixture<EnviosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
