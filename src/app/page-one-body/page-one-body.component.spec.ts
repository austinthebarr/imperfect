import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneBodyComponent } from './page-one-body.component';

describe('PageOneBodyComponent', () => {
  let component: PageOneBodyComponent;
  let fixture: ComponentFixture<PageOneBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOneBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
