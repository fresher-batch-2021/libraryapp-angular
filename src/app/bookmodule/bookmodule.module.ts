import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmoduleRoutingModule } from './bookmodule-routing.module';
import { AddbookComponent } from '../addbook/addbook.component';
import { EditbookComponent } from '../editbook/editbook.component';
import { BooksComponent } from '../books/books.component';
import { AllordersComponent } from '../allorders/allorders.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AddbookComponent,
    EditbookComponent,
    BooksComponent,
    AllordersComponent

  ],
  imports: [
    CommonModule,    
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BookmoduleRoutingModule,
  ]
})
export class BookmoduleModule { }
