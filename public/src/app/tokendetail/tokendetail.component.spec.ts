import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokendetailComponent } from './tokendetail.component';

describe('TokendetailComponent', () => {
  let component: TokendetailComponent;
  let fixture: ComponentFixture<TokendetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokendetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokendetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
