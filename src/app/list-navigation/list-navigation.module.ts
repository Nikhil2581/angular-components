import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingComponent } from './sorting/sorting.component';

@NgModule({
  imports: [CommonModule],
  exports: [SortingComponent],
  declarations: [SortingComponent],
})
export class ListNavigationModule {}
