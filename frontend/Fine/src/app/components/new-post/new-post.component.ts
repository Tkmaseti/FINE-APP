import { Post } from './../../_interface/posts';
import { PostService } from './../../_services/post.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {


  form: any = {
    title: null, text: null, image: null,
  };

  posts: Post[] = [];
  post?: Post;

  currentUser: any;

  // title = ''
  // text = ''
  // image = ""


  constructor(
    private postService: PostService,
    private token: TokenStorageService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

  }
  newPost() {
    console.log(this.form.title)
  }

  add(): void {
    let data = {
      userId: this.currentUser.id,
      userName: this.currentUser.username,
      userImage: this.currentUser.userImage,
      userProfession: this.currentUser.profession,
      content: {
        text: this.form.text,
        image: this.form.image,
      }
    }
    if (!data) { return; }
    this.postService.createPost(data)
      .subscribe(post => {
        // console.log(post)
        this.posts.push(post)
        this.router.navigate(['/posts']);
      });
  }
}
