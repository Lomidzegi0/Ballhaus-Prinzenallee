import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktionenComponent } from './produktionen.component';

describe('ProduktionenComponent', () => {
  let component: ProduktionenComponent;
  let fixture: ComponentFixture<ProduktionenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduktionenComponent]
    });
    fixture = TestBed.createComponent(ProduktionenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
