import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmoduleRoutingModule } from './bookmodule-routing.module';
import { AddbookComponent } from '../addbook/addbook.component';
import { EditbookComponent } from '../editbook/editbook.component';
import { BooksComponent } from '../books/books.component';
import { AllordersComponent } from '../allorders/allorders.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from "ngx-spinner";

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
    DataTablesModule,
    HttpClientModule,
    BookmoduleRoutingModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class BookmoduleModule { }
