import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{Registration} from './registration';
import { DataService } from '../data.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isCancledClicked = false;
  registrationForm: FormGroup; 
  submitted = false;
  registrationData: Registration
  @Output()
    cancleButtonEvent : EventEmitter <boolean> = new EventEmitter <boolean>();

  constructor(private formBuilder: FormBuilder,private dataService : DataService,private router : Router) { }
  get f() { return this.registrationForm.controls; }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      regEmail: ['', [Validators.required, Validators.email]],
      regPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{0,8}')]],
      regResetPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      regFirstName: ['', Validators.required],
      regLastName: ['', Validators.required],
      regPhoneNumber : ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      regAge :  ['', Validators.required],
      regExpertiese : ['', Validators.required],
      regTermAndCondition:[],
      regGender : []
  });
  }

  onRegSubmit(){
    this.submitted =  true;
    if (this.registrationForm.invalid) {
           return;
    }else{
      this.registrationData = this.registrationForm.value;
      this.dataService.registerUser(this.registrationData)  //Encode password in base-64
      .then( authenticateUser => {
        this.cancle()

      });
    }
 }

 cancle(){
   this.isCancledClicked = false;
     this.cancleButtonEvent.emit(this.isCancledClicked);
   console.log('cancle');
 }
}
