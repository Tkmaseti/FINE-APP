import { User } from './../../../_interface/users';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: User[] | undefined;


  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
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
