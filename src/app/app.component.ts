import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cloudServices: CloudService[] = [
    {id: '0', name: 'AWS'},
    {id: '1', name: 'Azure'},
    {id: '2', name: 'Aliyun'}
  ];

  selectedValue = '0';

  changeValue(couldSelected: HTMLInputElement) {
    this.selectedValue = couldSelected.value;
  }
}

export class CloudService {
  id: string;
  name: string;
}
