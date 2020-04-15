import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courseSubject = new BehaviorSubject(null);
  constructor() { }
  changeCourseData(data)
  {
    this.courseSubject.next(data);
  }

  get courseSubjectObservable()
  {
    return this.courseSubject.asObservable();
  }
}
