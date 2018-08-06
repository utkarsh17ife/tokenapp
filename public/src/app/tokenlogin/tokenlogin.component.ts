import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import {UserService} from '../app.service'

@Component({
  selector: 'app-tokenlogin',
  templateUrl: './tokenlogin.component.html',
  styleUrls: ['./tokenlogin.component.css']
})
export class TokenloginComponent implements OnInit {
  tokenval = {}
  private errorMessage:string
  private result:any
  constructor(private route:Router, private _user:UserService) { }

  ngOnInit() {
  }

  checkToken(token){
    console.log(token)
    this._user.loginToken(token).subscribe(token => {
      this.result = token
      if(this.result.data.tokens!=null){
        if(this.result.data.tokens.expirydate > Date.now())
          alert("Login Successful")
        else
          alert("Token has expired. Please try another one.")
      }
      else
        alert("Invalid token. Please try another one.")
      //console.log(this.result.data.tokens.inviteid);
    },
    error => this.errorMessage = < any > error);
  }

  goBack(){
    this.route.navigate(['/login'])
  }

}
