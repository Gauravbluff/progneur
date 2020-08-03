import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexwhiteComponent } from './indexwhite.component';

describe('IndexwhiteComponent', () => {
  let component: IndexwhiteComponent;
  let fixture: ComponentFixture<IndexwhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexwhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexwhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
