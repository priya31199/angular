import { Injectable } from '@angular/core';
  import {  Router } from '@angular/router';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { environment } from 'src/environments/environment';
  import { AngularFireAuth } from '@angular/fire/auth';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {
    auth: any;
    // login(loginData: { email: any; password: any; }) {
    //   throw new Error("Method not implemented.");
    // }
  
    // url = environment.url;
  url = 'http://localhost:4200/';
    constructor(private httpCLient: HttpClient, private router: Router,private afAuth:AngularFireAuth) {}

    // login(loginData){
    //   this.afAuth.auth.signInWithCredential(loginData).then(value =>  {
    //     console.log("ok");
    //    })
    // }
  
    login(loginData): Observable<firebase.User>{
      console.log("ok");

      return this.httpCLient.post<any>(this.url + `dashboard`, loginData);
    }
  
  }