import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { AllordersComponent } from './allorders/allorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    InitialpageComponent,
    BooksComponent,
    PlaceorderComponent,
    AddbookComponent,
    EditbookComponent,
    AllordersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
