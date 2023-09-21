import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string="https://ecommerce.routemisr.com/api/v1/";

  constructor(private _HttpClient:HttpClient) { }

  getdata(dataType:string):Observable<any>{
    return this._HttpClient.get(this.baseUrl+dataType) 
  }
}
