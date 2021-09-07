import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { AuthguardGuard } from './authguard.guard';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home-page", component: InitialpageComponent, canActivate: [AuthguardGuard, RoleGuard] },
  { path: "allusers", component: ListUsersComponent, canActivate: [AuthguardGuard, RoleGuard] },
  { path: "requestedbooks", component: RequestedBooksComponent, canActivate: [AuthguardGuard, RoleGuard] },
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