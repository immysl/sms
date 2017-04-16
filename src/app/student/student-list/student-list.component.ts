import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.students = this.db.list('/students');
  }

}
