import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData:any = {};
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private router: Router,private authenticationService: AuthenticationService,
    private route: ActivatedRoute,private formBuilder: FormBuilder) {

      localStorage.clear()
    }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit(value) {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    // this.authenticationService.login(value).pipe(first()).subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.error = error;
    //             this.loading = false;
    //         });


            let loginData = {
              email: value.email,
              password: value.password,
            }

            console.log(loginData);
        
            this.authenticationService.login(loginData).subscribe(res => {
              console.log(res);

              // if (res.status === true) {
        
                localStorage.setItem('currentUser', JSON.stringify(res));
               console.log("token data" + JSON.stringify(res));        
                if(this.returnUrl){
                this.router.navigateByUrl(this.returnUrl);
                }        
              // }
            },
            error => {
                this.error = error;
                this.loading = false;
            })

    }
}
