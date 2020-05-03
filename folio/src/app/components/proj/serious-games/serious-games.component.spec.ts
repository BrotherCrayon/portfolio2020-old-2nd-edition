import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriousGamesComponent } from './serious-games.component';

describe('SeriousGamesComponent', () => {
  let component: SeriousGamesComponent;
  let fixture: ComponentFixture<SeriousGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriousGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriousGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
