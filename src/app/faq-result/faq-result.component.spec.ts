import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqResultComponent } from './faq-result.component';

describe('FaqResultComponent', () => {
  let component: FaqResultComponent;
  let fixture: ComponentFixture<FaqResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
