import {
  Component,
  OnInit
} from '@angular/core';
import {
  UserService
} from '../app.service';

@Component({
  selector: 'app-tokengen',
  templateUrl: './tokengen.component.html',
  styleUrls: ['./tokengen.component.css']
})
export class TokengenComponent implements OnInit {
  private token: any
  private userid:any
  private gen:boolean = false
  private errorMessage: string
  constructor(private _user: UserService) {}

  ngOnInit() {
    this._user.navigateGen()
      .subscribe(token => {
          console.log(token);
          this.userid = token.data.user     
        },
        error => this.errorMessage = < any > error);
  }

  logout(){
    this._user.logout()
  }

  copy(inputElement){
    inputElement.select()
    document.execCommand("copy")
    inputElement.setSelectionRange(0, 0)
    alert("Copied to clipboard")
  }

  generateinvite(){
    this._user.getToken()
      .subscribe(token => {
        if(token.data!=null){
          this.gen = true
          this.token = token.data.token
          console.log(this.token)
        }
        else{
          alert("Cannot allocate more than 5 tokens at a time")
        }
      },
        error => this.errorMessage = < any > error);
  }

}
