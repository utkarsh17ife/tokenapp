import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenloginComponent } from './tokenlogin.component';

describe('TokenloginComponent', () => {
  let component: TokenloginComponent;
  let fixture: ComponentFixture<TokenloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
