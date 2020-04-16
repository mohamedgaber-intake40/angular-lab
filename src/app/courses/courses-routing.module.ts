import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseformComponent } from './courseform/courseform.component';
import { CoursesDetailsComponent} from './courses-details/courses-details.component';


const routes: Routes = [
	{ path: '', component: CoursesComponent, children: [
		{ path: 'new', component: CourseformComponent },
		{ path: ':id', component: CoursesDetailsComponent }
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
