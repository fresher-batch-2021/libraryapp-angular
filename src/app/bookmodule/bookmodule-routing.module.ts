import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from '../addbook/addbook.component';
import { AllordersComponent } from '../allorders/allorders.component';
import { AuthguardGuard } from '../authguard.guard';
import { BookComponent } from '../books/book/book.component';
import { BooksComponent } from '../books/books.component';
import { RoleGuard } from '../role.guard';


const routes: Routes = [
  { path: "", component: BooksComponent, canActivate: [AuthguardGuard,RoleGuard] },
  { path: "add-book", component: AddbookComponent, canActivate: [AuthguardGuard,RoleGuard] },
  { path: "all-orders", component: AllordersComponent, canActivate: [AuthguardGuard,RoleGuard] },

  {
    path: ":id/:action",
    component: BookComponent,
    canActivate: [AuthguardGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmoduleRoutingModule { }
