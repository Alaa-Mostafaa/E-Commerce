import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  catData:any[]=[];
  ProductData:any[]=[];
  BrandData:any[]=[];

  
  constructor(private _DataService:DataService){
    this.GetCategories();
    this.GetProducts();
    this.GetBrands();
  }




  GetCategories(){
    return this._DataService.getdata('categories').subscribe((response)=>{
      console.log(response.data)
      this.catData=response.data.slice(0,4);
    })
  }

  GetProducts(){
    return this._DataService.getdata('products').subscribe((response)=>{
      console.log(response.data)
      this.ProductData=response.data.slice(0,4);
    })
  }

  GetBrands(){
    return this._DataService.getdata('brands').subscribe((response)=>{
      console.log(response.data)
      this.BrandData=response.data.slice(0,4);
    })
  }

}
