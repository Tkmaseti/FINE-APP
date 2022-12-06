import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];


  currentUser: any;
  name:any;


  constructor(private httpClient: HttpClient,  private token: TokenStorageService,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

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
