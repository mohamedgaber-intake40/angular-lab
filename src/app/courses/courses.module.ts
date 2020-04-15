import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';


@NgModule({
  declarations: [CoursesComponent, CoursesListComponent, CoursesDetailsComponent, CoursesItemComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
