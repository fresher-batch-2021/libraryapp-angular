import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    LoginComponent,
    InitialpageComponent,
    ListUsersComponent,
    RequestedBooksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorsService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
