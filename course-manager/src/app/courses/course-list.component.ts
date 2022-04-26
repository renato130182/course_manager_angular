import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseServie } from "./courses.service";


@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];
    _filterBy: String = '';
    _courses: Course[] = [];
    filteredCourse: Course[] = [];
    constructor(private courseService: CourseServie) { }
    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll():void{
        this.courseService.retrieveAll().subscribe({
            next: (courses : any) => {
                //console.log(courses)
                this._courses = courses;
                this.filteredCourse = this._courses;
            },
            error: err => {
                console.log('Error',err);
            }
        })
    }
    set filter(value: String) {
        this._filterBy = value;
        this.filteredCourse = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
    deleteById(id: number){
        return this.courseService.deleteById(id).subscribe({
            next: () =>{
                console.log('Deleted!!');
                this.retrieveAll();
            },
            error: err => console.log('ERROR: ',err)
        });
    }
}