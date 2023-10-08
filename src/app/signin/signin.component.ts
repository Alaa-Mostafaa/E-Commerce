import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  errorMessage:string='';
  constructor(private _Auth:AuthService , private _Router:Router){}
  isLoading:boolean=false;

  signInForm:FormGroup=new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required])
  })
  
  signIn(Formdata:FormGroup){
    this.isLoading=true;
    console.log(Formdata.value)
    this._Auth.Login(Formdata.value).subscribe({
      next:(response)=>{
      if(response.message=='success'){
        localStorage.setItem("userToken",response.token)
        this._Auth.decodedToken()
        this._Router.navigate(['/home'])
      }  
      this.isLoading=false;
      },
      error:(err)=>{console.log(err.error.message)
        this.errorMessage=err.error.message;
        this.isLoading=false;

      }
      
  });

  }

}
