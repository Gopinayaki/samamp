import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestchartPage } from './testchart.page';

describe('TestchartPage', () => {
  let component: TestchartPage;
  let fixture: ComponentFixture<TestchartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
