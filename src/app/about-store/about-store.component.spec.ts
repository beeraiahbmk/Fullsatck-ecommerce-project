import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStoreComponent } from './about-store.component';

describe('AboutStoreComponent', () => {
  let component: AboutStoreComponent;
  let fixture: ComponentFixture<AboutStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutStoreComponent]
    });
    fixture = TestBed.createComponent(AboutStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
