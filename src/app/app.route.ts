import { Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { QueueComponent } from './components/queue/queue.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { TalktousComponent } from './components/talktous/talktous.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/queue', pathMatch: 'full'},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'queue', component: QueueComponent},   
    { path: 'servicos', component: ServicosComponent},
    { path: 'talktous', component: TalktousComponent} 
];