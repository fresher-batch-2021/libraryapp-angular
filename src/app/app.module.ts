import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { AllordersComponent } from './allorders/allorders.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestedBooksComponent } from './requested-books/requested-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InitialpageComponent,
    BooksComponent,
    AddbookComponent,
    EditbookComponent,
    AllordersComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
