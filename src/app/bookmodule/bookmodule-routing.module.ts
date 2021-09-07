import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from '../addbook/addbook.component';
import { AllordersComponent } from '../allorders/allorders.component';
import { AuthguardGuard } from '../authguard.guard';
import { BooksComponent } from '../books/books.component';
import { EditbookComponent } from '../editbook/editbook.component';

const routes: Routes = [
  {path:"",component:BooksComponent, canActivate:[AuthguardGuard]},
  {path:"add-book",component:AddbookComponent, canActivate:[AuthguardGuard]},
  {path:"edit-book/:id",component:EditbookComponent, canActivate:[AuthguardGuard]},
  {path:"all-orders",component:AllordersComponent, canActivate:[AuthguardGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmoduleRoutingModule { }
