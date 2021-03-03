import { Routes } from '@angular/router'
import { RegisterComponent } from './components/register/register.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full'},
    { path: 'register', component: RegisterComponent}   
];