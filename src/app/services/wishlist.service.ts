import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }


getWishList(){
  return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist").subscribe({
    next:(res)=>{console.log(res);
    },
    error:(error)=>{console.log(error);
    }
  })
 
 }


  addToWishlist(productId:any){
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',productId);
  }


  removeFromWishlist(productId:any){
    return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/wishlist/productId');


    
  }

}
