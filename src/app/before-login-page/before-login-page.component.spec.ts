import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeLoginPageComponent } from './before-login-page.component';

describe('BeforeLoginPageComponent', () => {
  let component: BeforeLoginPageComponent;
  let fixture: ComponentFixture<BeforeLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
