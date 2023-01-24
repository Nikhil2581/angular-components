import { Component, VERSION } from '@angular/core';
import { SortModel } from './shared/model/datamodel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  sorts: SortModel[] = [{ code: 'byDate' }];
}
