import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`Select Event Binding`, () => {
    it(`should use 'changeValue()' on 'select change' event in HTML`, () => {
      spyOn(component, 'changeValue');
      debugElement.query(By.css('select')).triggerEventHandler('change', null);
      fixture.detectChanges();

      expect(component.changeValue).toHaveBeenCalled();
    });
  });
});
