import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UberUnsComponent } from './uber-uns.component';

describe('UberUnsComponent', () => {
  let component: UberUnsComponent;
  let fixture: ComponentFixture<UberUnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UberUnsComponent]
    });
    fixture = TestBed.createComponent(UberUnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
