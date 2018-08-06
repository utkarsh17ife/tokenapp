import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokengenComponent } from './tokengen.component';

describe('TokengenComponent', () => {
  let component: TokengenComponent;
  let fixture: ComponentFixture<TokengenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokengenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokengenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
