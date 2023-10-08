import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { authGuard } from './auth.guard';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResertPasswordComponent } from './resert-password/resert-password.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full',title:'Login'},
  {path:'home',component:HomeComponent,title:'E-Commerce App',canActivate:[authGuard]},
  {path:'categories',component:CategoriesComponent,title:'Categories',canActivate:[authGuard]},
  {path:'brands',component:BrandsComponent ,title:'Brands',canActivate:[authGuard]},
  {path:'cart',component:MycartComponent,title:'Cart',canActivate:[authGuard]},
  {path:'products',component:ProductsComponent,title:'Products',canActivate:[authGuard]},
  {path:'signin',component:SigninComponent,title:'Login'},
  {path:'signup',component:SignupComponent,title:'Sign up'},
  {path:'profile',component:ProfileComponent,title:'Profile',canActivate:[authGuard]},
  {path:'wishlist',component:WishlistComponent,title:'Wishlist',canActivate:[authGuard]},
  {path:'forget',component:ForgetPasswordComponent,title:'Forget Password'},
  {path:'reset',component:ResertPasswordComponent,title:'Reset Password'},
  {path:'payment',component:PaymentComponent,title:'Checkout'},
  {path:'details/:id',component:ProductdetailsComponent,title:'Product details',canActivate:[authGuard]},
  {path:'**',component:NotfoundComponent,title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
