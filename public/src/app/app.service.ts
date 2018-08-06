import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  ActivatedRoute,
  Router
} from '@angular/router'
import {
  Observable,
  throwError
} from 'rxjs';
import {
  map,
  tap,
  catchError
} from 'rxjs/operators';


@Injectable()
export class UserService {
  private _loginUrl = 'http://localhost:3000/api/auth/login';
  private _signupUrl = 'http://localhost:3000/api/auth/signup';
  private _tokenUrl = 'http://localhost:3000/api/token/gen';
  private _genUrl = 'http://localhost:3000/api/token/gennavigate';
  private _tokenloginUrl = 'http://localhost:3000/api/token/check/';
  private _getTokens = "http://localhost:3000/api/token/getToken/";
  private _deleteUrl = "http://localhost:3000/api/token/delete/"

  TOKEN_KEY = 'token'

  constructor(private _http: HttpClient, private route: Router) {}

  get token() {
    return localStorage.getItem("token");
  }

  saveToken(token) {
    localStorage.setItem("token", token)
  }

  signup(data): Observable < any > {
    return this._http.post(this._signupUrl, data);
  }

  navigateGen():Observable < any >{
    return this._http.get(this._genUrl)
  }

  deleteItem(data):Observable<any>{
    return this._http.post(this._deleteUrl,data)
  }

  getTokensofUser(id):Observable < any >{
      return this._http.get(this._getTokens+id)
  }

  login(loginData) {
    this._http.post < any > (this._loginUrl, loginData).subscribe(res => {
      if(res.data == null){
        alert(res.message)
      }
      else {
      this.saveToken(res.data.jwtToken)    
      if (res.data.userDetails.type == "admin")
        this.route.navigate(['/tokengen'])
      else
        this.route.navigate(['/adminvalidate'])
      }
    })
  }

  logout() {
    localStorage.setItem("token","")
    this.route.navigate(['/login'])
  }

  getToken(): Observable < any > {
    return this._http.get(this._tokenUrl);
  }

  loginToken(data): Observable < any > {
    return this._http.post(this._tokenloginUrl,data);
  }
}
