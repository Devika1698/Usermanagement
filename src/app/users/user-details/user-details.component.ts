import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { YService } from 'src/app/y.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  taskObj: Task = new Task();

  id1: string = '';
  name1: string = '';
  email1: string = '';
  status1: string = '';


  constructor(private http: HttpClient, private route: Router, private service: YService, private rou: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getUserById(this.rou.snapshot.params['id']).subscribe((result => {
      this.id1 = result.id
      this.name1 = result.name
      this.email1 = result.email
      this.status1 = result.status

    }))

  }

  add() {

    this.taskObj.id = this.id1
    this.taskObj.name = this.name1
    this.taskObj.email = this.email1
    this.taskObj.status = this.status1
    console.log(this.taskObj);

    this.service.addTask(this.taskObj).subscribe(res => {
      alert('added')
      this.route.navigateByUrl('userlist')
    })

  }


  cancel() {

  }


  update() {

    this.taskObj.id = this.id1
    this.taskObj.name = this.name1
    this.taskObj.email = this.email1
    this.taskObj.status = this.status1
    console.log(this.taskObj);
    this.service.updateUser(this.taskObj).subscribe(res => {
      alert('updated')
      this.route.navigateByUrl('userlist')
    })
  }
}

