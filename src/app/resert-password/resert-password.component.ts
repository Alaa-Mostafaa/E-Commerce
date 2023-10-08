import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-resert-password',
  templateUrl: './resert-password.component.html',
  styleUrls: ['./resert-password.component.scss']
})
export class ResertPasswordComponent {
  errorMessage:string='';
  constructor(private _Auth:AuthService , private _Router:Router){}
  isLoading:boolean=false;

  resetForm:FormGroup=new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    newPassword:new FormControl(null,[Validators.required])
  })
  
  ResetPassword(resetForm:FormGroup){
    this.isLoading=true;
    console.log(resetForm.value)
    this._Auth.resetPassword(resetForm.value).subscribe({
      next:(response)=>{console.log(response);
        this.isLoading=false;
        if(response.token){
          this._Router.navigate(['/signin'])
        }
      },
      error:(error)=>{console.log(error);
        this.errorMessage=error.error.message;
      }
    })
  

  }

}
