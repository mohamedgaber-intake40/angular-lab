import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css'],
})
export class CoursesDetailsComponent implements OnInit, OnDestroy {
  course;
  private routerParamsSubscription: Subscription;
  constructor(
    private courseService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.routerParamsSubscription = this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        if (paramMap.has('id')) {
          const id = paramMap.get('id');
          this.course=this.courseService.getCourseById(id).subscribe((res: any) => {
            if (res.status) {
              this.course = res.data;
            }
          });
        }
      }
    );
  }

  // ngOnInit(): void {
  //   this.courseService.courseSubjectObservable.subscribe((data) => {
  //     this.course = data;
  //   });
  // }

  
	ngOnInit(): void {
		this.routerParamsSubscription = this.activatedRoute.paramMap.subscribe((paramMap) => {
			if (paramMap.has('id')) {
				const id = paramMap.get('id');
				this.course = this.courseService.getCourseById(id).subscribe((res: any) => {
					if (res.status)
						this.course = res.data;
				});
			}
		});
	}

  ngOnDestroy() {
    this.routerParamsSubscription.unsubscribe();
  }
}
