import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [ 
  {path:"login" ,component:LoginComponent},
  {path:"initial-page",component:InitialpageComponent, canActivate:[AuthguardGuard]},
  {path:"allusers",component:ListUsersComponent, canActivate:[AuthguardGuard]},
  {path:"requestedbooks",component:RequestedBooksComponent, canActivate:[AuthguardGuard]}, 
{
  path: 'books',
  loadChildren: () => import('./bookmodule/bookmodule.module').then(m => m.BookmoduleModule)
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }