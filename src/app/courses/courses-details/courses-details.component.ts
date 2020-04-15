import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {


  course;
  constructor(private courseService : CoursesService) { }

  ngOnInit(): void {
    this.courseService.courseSubjectObservable.subscribe(data => {
      this.course = data;
    });
  }

}
