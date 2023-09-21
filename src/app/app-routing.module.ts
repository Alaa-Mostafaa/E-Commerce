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

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full',title:'Sign In'},
  {path:'home',component:HomeComponent,title:'E-Commerce App'},
  {path:'categories',component:CategoriesComponent,title:'Categories'},
  {path:'brands',component:BrandsComponent ,title:'brands'},
  {path:'cart',component:MycartComponent,title:'cart'},
  {path:'products',component:ProductsComponent,title:'products'},
  {path:'signin',component:SigninComponent,title:'signin'},
  {path:'signup',component:SignupComponent,title:'signup'},
  {path:'profile',component:ProfileComponent,title:'profile'},
  {path:'wishlist',component:WishlistComponent,title:'wishlist'},
  {path:'**',component:NotfoundComponent,title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
