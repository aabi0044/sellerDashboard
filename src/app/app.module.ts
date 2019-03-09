import { BrowserModule } from '@angular/platform-browser';
import { ConfirmEqualValidatorDirective } from '../../src/app/pages/signup/confirm-equal-validator.directive'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { SellerAccountComponent } from './pages/dashboard/seller-account/seller-account.component';
import { HeaderComponent } from './shared/header/header.component';
import { ViewOrdersComponent } from './pages/dashboard/view-orders/view-orders.component';
import { InvoiceComponent } from './pages/dashboard/invoice/invoice.component';
import { ToasterService } from './services/toaster/toaster.service';
import { ToastrModule } from 'ngx-toastr';
import { ShipmentComponent } from './pages/dashboard/shipment/shipment.component';
import { ViewreportsComponent } from './pages/dashboard/viewreports/viewreports.component';
import { CreateproductComponent } from './pages/dashboard/createproduct/createproduct.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageinventoryComponent } from './pages/dashboard/manageinventory/manageinventory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewShipmentComponent } from './pages/dashboard/view-shipment/view-shipment.component';
import { SellerdashboardComponent } from './pages/dashboard/sellerdashboard/sellerdashboard.component'; // <-- import the module


@NgModule({
  declarations: [
    ConfirmEqualValidatorDirective,
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    NavbarComponent,
    SellerAccountComponent,
    HeaderComponent,
    ViewOrdersComponent,
    InvoiceComponent,
    ShipmentComponent,
    ViewreportsComponent,
    CreateproductComponent,
    ManageinventoryComponent,
    ViewShipmentComponent,
    SellerdashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'forgetpassword',
        component: ForgetpasswordComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [

          {
            path: 'selleraccount',
            component: SellerAccountComponent
          },
          {
            path: 'vieworders',
            component: ViewOrdersComponent
          },
          {
            path: 'invoice/:id',
            component: InvoiceComponent
          },
          {
            path: 'shipment/:id',
            component: ShipmentComponent
          },
          {
            path: 'viewreports',
            component: ViewreportsComponent
          },
          {
            path: 'createproduct',
            component: CreateproductComponent
          },
          {
            path: 'createproduct/:id',
            component: CreateproductComponent
          },
          {
            path: 'manageinventory',
            component: ManageinventoryComponent
          },
          {
            path: 'view-shipment',
            component: ViewShipmentComponent
          },{
            path:'sellerdashboard',
            component:SellerdashboardComponent
          }
        ]
      }

    ])
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
