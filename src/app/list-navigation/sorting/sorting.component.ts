import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortModel } from '../model/datamodel';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
})
export class SortingComponent implements OnInit {
  @Input()
  sortOptions: SortModel[];
  @Input()
  selectedOption: string;
  @Input()
  placeholder: string;
  @Input()
  sortLabels: { [code: string]: string };

  @Output()
  sortListEvent: EventEmitter<string>;

  constructor() {
    this.sortListEvent = new EventEmitter<string>();
  }

  sortList(sortCode: any): void {
    this.sortListEvent.emit(sortCode);
  }

  ngOnInit() {}
}
