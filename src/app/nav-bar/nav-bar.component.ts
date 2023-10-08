import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  islogin:boolean=false;
  cartNumber:number=0;

  
  constructor(private _Auth:AuthService,private _cart:CartService){
    _cart.numberOfCartItem.subscribe({
      next:(response)=>{
      this.cartNumber=response
      }
    })
    
    _Auth.userData.subscribe({
      next:()=>{
        if(_Auth.userData.getValue() !== null){
          this.islogin=true;
              }else{
              this.islogin=false;
              }
      }
    })

  }

   /*  if(_Auth.userData !== null){
      this.islogin=true;
    } 
    else
    {
      this.islogin=false;

    }

  } */

  LOGOUT(){
    this._Auth.logout()
  }

}
