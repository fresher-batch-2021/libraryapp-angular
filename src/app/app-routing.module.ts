import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AllordersComponent } from './allorders/allorders.component';
import { BooksComponent } from './books/books.component';
import { EditbookComponent } from './editbook/editbook.component';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [ 
  {path:"login" ,component:LoginComponent},
  {path:"initial-page",component:InitialpageComponent, canActivate:[AuthguardGuard]},
  {path:"books",component:BooksComponent, canActivate:[AuthguardGuard]},
  {path:"add-book",component:AddbookComponent, canActivate:[AuthguardGuard]},
  {path:"edit-book/:id",component:EditbookComponent, canActivate:[AuthguardGuard]},
  {path:"all-orders",component:AllordersComponent, canActivate:[AuthguardGuard]},
  {path:"allusers",component:ListUsersComponent, canActivate:[AuthguardGuard]},
{path:"requestedbooks",component:RequestedBooksComponent, canActivate:[AuthguardGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }