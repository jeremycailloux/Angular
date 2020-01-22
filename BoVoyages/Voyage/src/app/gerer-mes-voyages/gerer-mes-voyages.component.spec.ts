import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererMesVoyagesComponent } from './gerer-mes-voyages.component';

describe('GererMesVoyagesComponent', () => {
  let component: GererMesVoyagesComponent;
  let fixture: ComponentFixture<GererMesVoyagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererMesVoyagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererMesVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
