import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../services/cart-service.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
  wish:any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }







  productID:any;
  productDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private _DataService:DataService,private _CartService:CartService){
    this._ActivatedRoute.paramMap.subscribe((param)=>{
      console.log(param.get('id'))
      this.productID=param.get('id');
    })
this.getDetails()
  }

  getDetails(){
    this._DataService.getProductDetails(this.productID).subscribe((response)=>{
      console.log(response.data);
      this.productDetails=response.data;
      
    })
  }
  addTocart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:(response)=>{/* console.log(response) */
      if(response.status == 'success'){
        this._CartService.numberOfCartItem.next(response.numOfCartItems)
        Swal.fire({
          icon: 'success',
          title: '',
          text: response.message,
        })
      }
      },
      error:(err)=>{console.log(err)}
    })
  }

  addToWish(productId:string){
    this. _CartService.addToWishlist(productId).subscribe({
      next:(response)=>{/* console.log(response.data) */
        this.wish=response.data;
        if(response.status == 'Success'){
         

          Swal.fire({
            icon: 'success',
            title: '',
            text: response.message,
          })
        }
      },
      error:(err)=>{console.log(err)}
    })
  }

}
