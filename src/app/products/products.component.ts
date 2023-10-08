import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart-service.service';
import Swal from 'sweetalert2';
import { WishlistService } from '../services/wishlist.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  ProductData: any;
  heartcolor:boolean=false;
  display:string="";
  wish:any;
  searchvalue:string='';

constructor(private _DataService:DataService , private _cart:CartService,private _WishlistService:WishlistService  ){
  this.GetProducts();
  this._WishlistService.getWishList();
}
ngOnInit(): void {
   
  this.GetProducts(); 
}

  GetProducts(){
    return this._DataService.getdata('products').subscribe((response)=>{
/*       console.log(response.data)
 */      this.ProductData=response.data;
      console.log(this.ProductData.id);
      
    })
  }


  addTocart(productId:string){
    this._cart.addToCart(productId).subscribe({
      next:(response)=>{/* console.log(response) */;
        this.display=response.message;
/* console.log(this.display);
 */
      if(response.status == 'success'){
        this._cart.numberOfCartItem.next(response.numOfCartItems)
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
    this. _cart.addToWishlist(productId).subscribe({
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

  addTowishlist(id:any){
    this._WishlistService.addToWishlist(id).subscribe(
      (res)=>{/* console.log(res); */
      this.heartcolor=true;
      console.log("loo")

    })

  }


  removefromwishList(id:any){
    this._WishlistService.removeFromWishlist(id).subscribe((res)=>{/* console.log(res); */
      this.heartcolor=false;

    })

  }
}
