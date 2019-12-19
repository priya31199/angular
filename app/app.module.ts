import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

const appRoutes:Routes = [ 
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  { path: '**', component: LoginComponent } ,

];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule ,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
    
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
