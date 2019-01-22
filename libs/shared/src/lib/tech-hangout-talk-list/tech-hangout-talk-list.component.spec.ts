import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechHangoutTalkListComponent } from './tech-hangout-talk-list.component';

describe('TechHangoutTalkListComponent', () => {
  let component: TechHangoutTalkListComponent;
  let fixture: ComponentFixture<TechHangoutTalkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechHangoutTalkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechHangoutTalkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
