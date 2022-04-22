import { ThrowStmt } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { AppModule } from '@app/app.module';
import { AuthService } from '@auth/auth.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-signup', 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = {
    password:'',
    username: '', 
    role: 'suscriptor',
  }

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  signupUser(){
    console.log(this.user)
    this.authService.signupUser(this.user)
    .subscribe(
     res => {
        console.log(res);
        localStorage.setItem('token', res.token);
      },
      err => {
        console.log(err) ;
      }
      
    )
  }

}
