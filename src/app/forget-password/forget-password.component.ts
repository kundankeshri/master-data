import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import{ForgetPassword} from './ForgetPassword';
import { DataService } from '../data.service';
import { MustMatch } from './old-psd-validator';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  isCancledClicked = false;
  forgetPasswordForm: FormGroup; 
  forgetPassword : ForgetPassword;
  submitted = false;
  confirmPassword = false;
  @Output()
    cancleButtonEvent : EventEmitter <boolean> = new EventEmitter <boolean>();
  constructor(private formBuilder: FormBuilder,private dataService : DataService) { }
  get f() { return this.forgetPasswordForm.controls; }


  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      regEmail: ['', [Validators.required, Validators.email]],
      regOldPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      regNewPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      regConfirmPassword: ['', [Validators.required, 
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
  },
  {
    validator: MustMatch('regNewPassword', 'regConfirmPassword')
}
  );
  }
  cancle(){
    this.isCancledClicked = false;
      this.cancleButtonEvent.emit(this.isCancledClicked);
    console.log('cancle');
  }
  onForgetPasswordSubmit(){
    this.submitted =  true;
    if (this.forgetPasswordForm.invalid) {
           return;
    }
  }

  // get oldPwd(){
  //   return this.forgetPasswordForm.get('regOldPassword');
  // }

  //  get newPwd(){
  //   return this.forgetPasswordForm.get('regNewPassword');
  // }

  //  get confirmPwd(){
  //   return this.forgetPasswordForm.get('regConfirmPassword');
  // }

}
