import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../services/cart-service.service';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
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
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  catData:any[]=[];
  ProductData:any[]=[];
  BrandData:any[]=[];
  searchvalue:string='';


  
  constructor(private _DataService:DataService , private _CartService:CartService){
    this.GetCategories();
    this.GetProducts();
  }
  ngOnInit(): void {
    this.GetCategories();
    this.GetProducts(); 
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


  GetCategories(){
    return this._DataService.getdata('categories').subscribe((response)=>{
/*       console.log(response.data)
 */      this.catData=response.data;
    })
  }

  GetProducts(){
    return this._DataService.getdata('products').subscribe((response)=>{
/*       console.log(response.data)
 */      this.ProductData=response.data;
    })
  }

}