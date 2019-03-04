import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule}from'@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import{FormsModule}from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
    },
    {
      path:'dashboard',
      component:DashboardComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
