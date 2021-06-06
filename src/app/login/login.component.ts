import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [DataService]
})
export class LoginComponent implements OnInit {
  userName : any;
  password : any;
  isSignInPage = true;
  isSignUpClicked = false;
  isPasswordhanged = false;
  userDetails : any;
  logonForm: FormGroup;
  submitted = false;
  failedLogin = false;
  constructor(  private router: Router , private dataService : DataService,private formBuilder: FormBuilder) { }
  signIn(){
    this.submitted = true;
    if (this.logonForm.invalid) {
        return;
    }
    this.dataService.authenticateUser(this.userName, btoa(this.password))  //Encode password in base-64
    .then( authenticateUser => {
      if(authenticateUser.length >0){
        this.isSignInPage = false;
        this.isSignUpClicked = false;
        this.isPasswordhanged = false;
        this.failedLogin =  false;
        this.router.navigate(['/dashboard']);
      }else{
        this.isSignInPage = true;
        this.isSignUpClicked = false;
        this.isPasswordhanged = false;
        this.failedLogin =  true;
      }
     
    })
   
  }
  forgetPassword(){
    this.isSignInPage = false;
    this.isSignUpClicked = false;
    this.isPasswordhanged = true;
    console.log('forget password');
  }
  
  guestLogin(){
        this.isSignInPage = false;
        this.isSignUpClicked = false;
        this.isPasswordhanged = false;
        this.failedLogin =  false;
        this.router.navigate(['/dashboard']);
  }

  onStateChanged(selectedValue : boolean){
    console.log(selectedValue);
    this.isSignUpClicked = selectedValue;
    this.isSignInPage = true;
  }
  onForgetPassword(selectedValue : boolean){
    this.isPasswordhanged = selectedValue;
    this.isSignInPage = true;
  }
  signUp(){
    this.isSignInPage = false;
    this.isSignUpClicked = true;
    this.isPasswordhanged = false;
  console.log('SignIn');
  }
  get f() { return this.logonForm.controls; }

  ngOnInit() {
    this.logonForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required
       // , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]]
  });
  }


}
