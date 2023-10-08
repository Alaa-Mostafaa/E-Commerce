import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  successMessage:string="";
  FailMessage:string="";

  constructor(private _Auth:AuthService, private _Router:Router){}
  ForgotForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email])
  })
  VerifyForm:FormGroup=new FormGroup({
    resetCode:new FormControl(null,[Validators.required])
  })
  forgotPassword(ForgotForm:FormGroup){
    console.log(ForgotForm);
    this._Auth.forgetPassword(ForgotForm.value).subscribe({
      next:(response)=>{
        this.successMessage=response.message;
        console.log(this.successMessage);
        document.querySelector(".forgetPassword")?.classList.add('d-none');
        document.querySelector(".verfiy")?.classList.remove('d-none')


      },
      error:(err)=>{console.log(err.error.message);
        this.FailMessage=err.error.message;
      }
    })
    

  }

verifyCode(VerifyForm:FormGroup){
  console.log(VerifyForm);
  this._Auth.verifyCode(VerifyForm.value).subscribe({
    next:(response)=>{console.log(response);
      if(response.status== 'Success'){
        this._Router.navigate(['/reset'])
      }
    }
  })
  

}

}
