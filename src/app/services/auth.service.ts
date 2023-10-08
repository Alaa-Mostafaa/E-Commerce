import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  userData=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
  decodedToken(){
    let Token=JSON.stringify(localStorage.getItem('userToken'));
    let decode:any=jwtDecode(Token);
    this.userData.next(decode);
  }

  signUp(Formdata:any):Observable<any>{
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',Formdata);
  }


  Login(Formdata:any):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',Formdata);
   }



logout(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._Router.navigate(['/signin'])
}
forgetPassword(Formdata:any):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',Formdata);
 }

 verifyCode(Formdata:any):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',Formdata);
 }

 resetPassword(Formdata:any):Observable<any>{
  return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',Formdata);
 }


}




