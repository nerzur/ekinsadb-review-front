import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfiguratorComponent } from './page-configurator.component';

describe('PageConfiguratorComponent', () => {
  let component: PageConfiguratorComponent;
  let fixture: ComponentFixture<PageConfiguratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageConfiguratorComponent]
    });
    fixture = TestBed.createComponent(PageConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
