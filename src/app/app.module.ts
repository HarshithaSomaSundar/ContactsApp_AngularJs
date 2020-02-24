import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetModuleComponent } from './get-module/get-module.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';


const appRoutes: Routes = [
  
  // {
  //   path: 'contacts-add',
  //   component: PostModuleComponent,
  //   data: { title: 'Product Add' }
  // },
  {
    path: 'contacts',
    component: GetModuleComponent,
    data: { title: 'Contact List' }
  },
  
  {
    path: 'contacts/:id',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  },
  { path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GetModuleComponent,
    ContactDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
