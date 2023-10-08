import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrandsComponent } from './brands/brands.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { MycartComponent } from './mycart/mycart.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResertPasswordComponent } from './resert-password/resert-password.component';
import { PaymentComponent } from './payment/payment.component';
import { LoadingComponent } from './loading/loading.component';
import { SearchhPipe } from './searchh.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    ProductsComponent,
    NavBarComponent,
    BrandsComponent,
    NotfoundComponent,
    FooterComponent,
    ProfileComponent,
    MycartComponent,
    SigninComponent,
    SignupComponent,
    WishlistComponent,
    ProductdetailsComponent,
    MainSliderComponent,
    ForgetPasswordComponent,
    ResertPasswordComponent,
    PaymentComponent,
    LoadingComponent,
    SearchhPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
