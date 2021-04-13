import { Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full'},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent}   
];