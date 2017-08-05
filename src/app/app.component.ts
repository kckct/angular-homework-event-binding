import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue = '0';

  changeValue(couldSelected: HTMLInputElement) {
    this.selectedValue = couldSelected.value;
  }
}
