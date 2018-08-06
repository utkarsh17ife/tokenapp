import { Component, OnInit } from '@angular/core';
import {UserService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {}

  constructor(private _user:UserService) { }

  ngOnInit() {
  }

  login(data){
    localStorage.setItem("token","")
    console.log(data);
    this._user.login(data)
      //localStorage.setItem("token", JSON.stringify(result.data.jwtToken))
    //});
  }

}
