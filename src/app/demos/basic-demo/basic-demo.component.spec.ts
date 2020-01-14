import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDemoComponent } from './basic-demo.component';

describe('BasicDemoComponent', () => {
  let component: BasicDemoComponent;
  let fixture: ComponentFixture<BasicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
