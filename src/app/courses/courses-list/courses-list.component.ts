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
  pages: any[];
  currentPage: number = 1;

  constructor(private courseService: CoursesService , private activateRoute :ActivatedRoute) {}

  ngOnInit(): void {
   
    this.activateRoute.queryParamMap.subscribe(queryParamMap => {
      // const limit = queryParamMap.get('limit') || 10;
      const params = {};
      queryParamMap.keys.forEach(key => {
        params[key] = queryParamMap.get(key);
      })
       this.courseService.getCourses(params).subscribe((res:any) => {
      if (res.status) {
        this.courses = res.data;
        this.currentPage = res.page;
        this.pages = new Array(res.total_pages || 0);
        console.log(this.pages , this.currentPage);
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
