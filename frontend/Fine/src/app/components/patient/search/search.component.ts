import { User } from './../../../_interface/users';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: User[] | undefined;
  currentUser: any;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute, private token: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getUsers()
  }


  getUsers(){
    this.httpClient.get<any>('http://localhost:8050/api/users/').subscribe(
      response => {
        // console.log(response);
        this.users = response;
      }
    );
  }


}
