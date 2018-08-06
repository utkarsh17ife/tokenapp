import { Component, OnInit } from '@angular/core';
import {UserService} from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tokendetail',
  templateUrl: './tokendetail.component.html',
  styleUrls: ['./tokendetail.component.css']
})
export class TokendetailComponent implements OnInit {
  public data:any
  public id:any
  private errorMessage : string
  constructor(private route: ActivatedRoute,private _user:UserService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this._user.getTokensofUser(this.id).subscribe(tokens => {
      this.data = tokens.data.tokens
      console.log(this.data);
    },
    error => this.errorMessage = < any > error);
  }

  deleteItem(data){
    this._user.deleteItem(data).subscribe(tokens => {
      console.log(tokens)
      alert("Disabled")
      this._user.getTokensofUser(this.id).subscribe(tokens => {
        this.data = tokens.data.tokens
        console.log(this.data);
      },
      error => this.errorMessage = < any > error);
    },
    error => this.errorMessage = < any > error);
  }

}
