import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HausComponent } from './haus.component';

describe('HausComponent', () => {
  let component: HausComponent;
  let fixture: ComponentFixture<HausComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HausComponent]
    });
    fixture = TestBed.createComponent(HausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
