// import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { User } from 'src/app/_interface/users';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showMe: Boolean = true
  anItem: Boolean = false

  users: User[] = [];
  user?:User;

  name : any;
  email : any;
  profession : any;
  bio :any;



  currentUser: any;

profileForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  profession: new FormControl(''),
  bio: new FormControl('')
})




  constructor(private token: TokenStorageService, private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    // console.log(this.currentUser.userMail)
  }
  toogleTag (){
    this.showMe = true;
    this.anItem = false;
  }

  cancelFunc(){
    this.showMe = false
    this.anItem = true
  }

  userUpdate(){
    console.table(this.currentUser)
    const phone = this.user
    if(this.currentUser){
      this.userService.updateUser(this.currentUser.id, this.currentUser)
      .subscribe({
        next: data => console.log(data),
        error: err => console.error(err)
      })
    }

  }
}
