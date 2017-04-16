import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: FirebaseListObservable<Student[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.students = this.db.list('/students');
  }

}
