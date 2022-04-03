import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlankComponent } from './view-blank.component';

describe('ViewBlankComponent', () => {
  let component: ViewBlankComponent;
  let fixture: ComponentFixture<ViewBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBlankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
