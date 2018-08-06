import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TokengenComponent } from './tokengen/tokengen.component';
import { TokenloginComponent } from './tokenlogin/tokenlogin.component';
import { UserService } from './app.service';
import { AuthInterceptorService } from './authInterceptor.service';
import { AdminvalidateComponent } from './adminvalidate/adminvalidate.component';
import { TokendetailComponent } from './tokendetail/tokendetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TokengenComponent,
    TokenloginComponent,
    AdminvalidateComponent,
    TokendetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'login',
      component: LoginComponent
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    { path: 'signup',
    component: SignupComponent},
    {
      path: 'tokengen',
      component: TokengenComponent
    },
    {
      path: 'tokengen/:id',
      component: TokendetailComponent
    },
    {
      path: 'tokenlogin',
      component: TokenloginComponent
    },
    {
      path: 'adminvalidate',
      component: AdminvalidateComponent
    }
  ],{onSameUrlNavigation: 'reload'}),
],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
