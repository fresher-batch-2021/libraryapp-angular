import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AllordersComponent } from './allorders/allorders.component';
import { BooksComponent } from './books/books.component';
import { EditbookComponent } from './editbook/editbook.component';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
// import { RegisterComponent } from './register/register.component';

const routes: Routes = [ 
  {path:"login" ,component:LoginComponent},
  // {path:"register",component:RegisterComponent},
  {path:"initial-page",component:InitialpageComponent},
  {path:"books",component:BooksComponent},
  {path:"add-book",component:AddbookComponent},
  {path:"edit-book/:id",component:EditbookComponent},
  {path:"all-orders",component:AllordersComponent},
  {path:"allusers",component:ListUsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }