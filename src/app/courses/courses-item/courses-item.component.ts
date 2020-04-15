import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';


@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css']
})
export class CoursesItemComponent implements OnInit {
  @Input('courseData')  course; 
  @Output() CourseClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.CourseClick.emit(this.course.title);
  }

}
