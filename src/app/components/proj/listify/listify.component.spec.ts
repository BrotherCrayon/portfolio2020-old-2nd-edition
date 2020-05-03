import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListifyComponent } from './listify.component';

describe('ListifyComponent', () => {
  let component: ListifyComponent;
  let fixture: ComponentFixture<ListifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
