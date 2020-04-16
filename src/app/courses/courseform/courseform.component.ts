import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css'],
})
export class CourseformComponent implements OnInit {
  course = new Course();

  constructor(private courseService: CoursesService , private router : Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // console.log(this.course);

      // this.courseService.addCourse( form.value);
      // form.reset();
      this.courseService.addCourse({...this.course}).subscribe((res: any) => {
        if (res.status) {
          this.router.navigate(['/courses', res.data.id]);
        }
      });
    }
  }
}
