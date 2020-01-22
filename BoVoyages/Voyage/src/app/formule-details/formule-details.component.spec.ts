import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuleDetailsComponent } from './formule-details.component';

describe('FormuleDetailsComponent', () => {
  let component: FormuleDetailsComponent;
  let fixture: ComponentFixture<FormuleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
