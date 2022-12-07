import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  practitioner: Boolean = false;
  patient: Boolean = true;
  check: Boolean = true;



  pracform: any = {
    username: null, email: null, password: null, profession: null, license: null,
  };

  paform: any = {
    username: null, email: null, password: null, nextOfKinNo: null, nextOFKInName: null,
  };


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';



  constructor(private authService: AuthService) { }



  ngOnInit(): void {
    // console.log(this.practitioner)
  }

  tooglePractitioner() {
    // console.log(this.practitioner)
    this.practitioner = true
    this.patient = false
  }

  toogleBack() {
    this.practitioner = false;
    this.patient = true;
    this.check = false
  }
  onSubmit(): void {
    const { username, email, password, profession, license } = this.paform;
    const roles = "practitioner"
    this.authService.registerPrac(username, email, password, profession, license, roles,).subscribe({
      next: data => {
        // console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        window.alert("Please Login to Verify Password")
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  pa(): void {
    const { username, email, password, nextOFKInName, nextOfKinNo } = this.pracform;

    const roles = ""
    this.authService.registerPa(username, email, password,nextOfKinNo, roles,nextOFKInName).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }


}

