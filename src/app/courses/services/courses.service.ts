import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiURI = 'https://afternoon-falls-30227.herokuapp.com/api/v1/courses';
  private courseSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  changeCourseData(data) {
    this.courseSubject.next(data);
  }

  getCourses(params ={}) {
    return this.http.get(this.apiURI,{params});
  }

  get courseSubjectObservable() {
    return this.courseSubject.asObservable();
  }
  getCourseById(id) {
    return this.http.get(`${this.apiURI}/${id}`);
  }
  addCourse(course) {
    // console.log(course);

    return this.http.post(this.apiURI, course);
  }
}
