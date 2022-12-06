import { Post } from './../../_interface/posts';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  posts: Post[] | undefined;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(){
    this.httpClient.get<any>('http://localhost:8050/api/post/').subscribe(
      response => {
        // console.log(response);
        this.posts = response;
      }
    );
  }
}
