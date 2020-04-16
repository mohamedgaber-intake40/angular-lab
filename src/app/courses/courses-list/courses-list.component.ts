import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  // courses = [
  //   {
  //     id: 1,
  //     title: 'nodeJS',
  //     instructor: 'Mohamed',
  //     isAvaiable: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'PHP',
  //     instructor: 'Ahmed',
  //     isAvaiable: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'JavaScript',
  //     instructor: 'Ali',
  //     isAvaiable: true,
  //   },
  // ];
  courses;
  clickedCourseTilte;
  constructor(private courseService: CoursesService , private activateRoute :ActivatedRoute) {}

  ngOnInit(): void {
   
    this.activateRoute.queryParamMap.subscribe(queryParamMap => {
      const limit = queryParamMap.get('limit') || 10;
       this.courseService.getCourses({limit}).subscribe((res:any) => {
      if (res.status) {
        this.courses = res.data;
      }
    });

    })
  }
  onCourseClick(data) {
    this.clickedCourseTilte = data;
  }
  onCourseItemClick(course) {
    this.courseService.changeCourseData(course);
  }
}
