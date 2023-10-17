import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioFormComponent } from './envio-form.component';

describe('EnvioFormComponent', () => {
  let component: EnvioFormComponent;
  let fixture: ComponentFixture<EnvioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
