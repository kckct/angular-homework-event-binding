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

    it(`should change 'selectedValue' when selectedIndex changed in HTML`, () => {
      const select = debugElement.query(By.css('select'));
      select.nativeElement.selectedIndex = 1;
      select.triggerEventHandler('change', null);
      fixture.detectChanges();
      expect(component.selectedValue).toBe('1');

      select.nativeElement.selectedIndex = 2;
      select.triggerEventHandler('change', null);
      fixture.detectChanges();
      expect(component.selectedValue).toBe('2');

      select.nativeElement.selectedIndex = 0;
      select.triggerEventHandler('change', null);
      fixture.detectChanges();
      expect(component.selectedValue).toBe('0');
    });

    it(`should use 'changeValue()' to change 'selectedValue'`, () => {
      const selectedStub = <HTMLInputElement>{
        'value': 'fake',
      };
      target.changeValue(selectedStub);

      expect(target.selectedValue).toBe('fake');
    });
  });
});
