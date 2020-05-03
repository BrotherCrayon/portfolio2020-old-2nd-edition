import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DissComponent } from './diss.component';

describe('DissComponent', () => {
  let component: DissComponent;
  let fixture: ComponentFixture<DissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
