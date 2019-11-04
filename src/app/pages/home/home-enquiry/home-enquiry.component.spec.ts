import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnquiryComponent } from './home-enquiry.component';

describe('HomeEnquiryComponent', () => {
  let component: HomeEnquiryComponent;
  let fixture: ComponentFixture<HomeEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
