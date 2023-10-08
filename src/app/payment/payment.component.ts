import { Component } from '@angular/core';
import { CartService } from '../services/cart-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  productId:string=''
  constructor(private _cart:CartService){}

  payment:FormGroup=new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null)
  })

   navigateToPage(url:string){
    window.location.href=url
   }

ngOnInit(): void {
  this._cart.getLoggedUserCart().subscribe({
    next:(response)=>{
    this.productId=response.data._id
  }

  })
}

  onlinePayment(payment:FormGroup){
console.log(payment)
this._cart.handelPayment(  this.productId,payment.value).subscribe({
  next:(response)=>{
    if(response.status == 'success'){
      this.navigateToPage(response.session.url)

    }
    console.log(response)
  }
})
  }
}
