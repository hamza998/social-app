import { Component, OnInit } from '@angular/core';
import { any } from 'codelyzer/util/function';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  subURL = 'posts'
  PostsData : any;

  constructor(public httpService : HttpServiceService) { }

  ngOnInit() {
    this.getDataForPost();
  }

  public getDataForPost(): void{
    this.httpService.getData(this.subURL).subscribe(data => {
      this.PostsData = data;
      console.log(this.PostsData,'ye data h')
    })
  }

}
