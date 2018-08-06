import { Component, OnInit } from '@angular/core';
import {UserService} from '../app.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {}
  private errorMessage:string
  constructor(private _user:UserService,private route:Router) { }

  ngOnInit() {
  }

  signup(data){
    this._user.signup(data).subscribe(token => {
      console.log(token);
      if(token.data!=null){
        alert("User registered successfully");
        this.route.navigate(['/login']) 
      }
      else{
        alert(token.message)
      }   
    },
    error => this.errorMessage = < any > error);
  }

}
