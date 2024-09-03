import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { authGuard } from './guard/auth.guard';
import { BooksDetailComponent } from './pages/books-detail/books-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path:'',
    component: MainLayoutComponent,
    children: [
      {path:'home', component: HomeComponent, canActivate: [authGuard] },
      {path:'home/books/:id', component: BooksDetailComponent, canActivate: [authGuard]},
    ]
  },
  {path: '**', redirectTo: '/login', pathMatch:'full'},
];
