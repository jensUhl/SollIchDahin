import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwthModuleComponent } from './rwth-module.component';

describe('RwthModuleComponent', () => {
  let component: RwthModuleComponent;
  let fixture: ComponentFixture<RwthModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwthModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwthModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
