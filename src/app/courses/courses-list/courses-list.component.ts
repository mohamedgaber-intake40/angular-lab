import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses = [
    {
      id: 1,
      title: "nodeJS",
      instructor: 'Mohamed',
      isAvaiable:true
    },
    {
      id: 2,
      title: "PHP",
      instructor: 'Ahmed',
      isAvaiable:false
    },
    {
      id: 3,
      title: "JavaScript",
      instructor: 'Ali',
      isAvaiable:true
    }
  ];
  clickedCourseTilte;
  constructor(private courseService :CoursesService) { }

  ngOnInit(): void {
  }
  onCourseClick(data)
  {
    this.clickedCourseTilte = data;
  } 
  onCourseItemClick(course)
  {
    this.courseService.changeCourseData(course); 
  }
}
