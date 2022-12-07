// import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { User } from 'src/app/_interface/users';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  profileForm = this.fb.group({
    username: ['', Validators.required],
    userMail:[''],
    profession:[''],
    userAbout:['']

  });

profile = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  profession: new FormControl(''),
  bio: new FormControl('')
})




  constructor(
    private fb: FormBuilder,
    private token: TokenStorageService,
    private route: ActivatedRoute,
    private userService: UserService
    ) { }


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
  productUpdate(){
    if(this.user){
      var prof: any = this.profileForm.value
      console.log(prof);
      this.userService.updateProduct(prof).subscribe(() => console.log(prof))
    }
  }

  userUpdate(){

    var prof: any = this.profileForm.value
    // console.log(prof)
    // console.log(this.currentUser)
    if(this.currentUser){
      this.userService.updateUser(this.currentUser.id, prof)
      .subscribe({
        next: () => console.log(prof),
        error: err => console.error(err)
      })
    }

  }
}
