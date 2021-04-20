import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { rootRouterConfig } from './app.route';
import { LoginComponent } from './components/login/login.component';
import { QueueComponent } from './components/queue/queue.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { TalktousComponent } from './components/talktous/talktous.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    QueueComponent,
    ServicosComponent,
    TalktousComponent,
    ForgotpasswordComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [    
  {    
    provide: APP_BASE_HREF, useValue: '/'
  },
  {
      provide: LOCALE_ID,
      useValue: 'pt'
  }, 
  {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
