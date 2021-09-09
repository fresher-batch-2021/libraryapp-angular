import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { AuthguardGuard } from './authguard.guard';
import { RoleGuard } from './role.guard';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { OrderreportComponent } from './orderreport/orderreport.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home-page", component: InitialpageComponent, canActivate: [AuthguardGuard, RoleGuard] },
  { path: "allusers", component: ListUsersComponent, canActivate: [AuthguardGuard, RoleGuard] },
  { path: "requestedbooks", component: RequestedBooksComponent, canActivate: [AuthguardGuard, RoleGuard] },
  { path: "order-report", component: OrderreportComponent, canActivate: [AuthguardGuard, RoleGuard] },

  // {path:"viewbook/:id",component:ViewbookComponent,canActivate:[AuthguardGuard,RoleGuard]},
  {
    path: 'books',
    loadChildren: () => import('./bookmodule/bookmodule.module').then(m => m.BookmoduleModule)
  },
  {path:':id',
children:[
  {path:'viewbook',component:ViewbookComponent,canActivate:[AuthguardGuard,RoleGuard]}
]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }