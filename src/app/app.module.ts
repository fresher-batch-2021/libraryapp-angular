import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { FormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { DataTablesModule } from "angular-datatables";
import { InterceptorsService } from './interceptors.service';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { ErrorInterceptor } from './error.interceptor';
import { OrderreportComponent } from './orderreport/orderreport.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InitialpageComponent,
    ListUsersComponent,
    RequestedBooksComponent,
    ViewbookComponent,
    OrderreportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    GoogleChartsModule,
    MatSliderModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
