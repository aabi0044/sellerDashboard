import { BrowserModule } from '@angular/platform-browser';

import{RouterModule}from'@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    { path:'',
      redirectTo:'login',
      pathMatch:'full'
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'forgetpassword',
      component:ForgetpasswordComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
