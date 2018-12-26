import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensFashionComponent } from './womens-fashion.component';

describe('WomensFashionComponent', () => {
  let component: WomensFashionComponent;
  let fixture: ComponentFixture<WomensFashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensFashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
