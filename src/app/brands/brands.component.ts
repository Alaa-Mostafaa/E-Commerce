import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  BrandData:any[]=[];

   
  constructor(private _DataService:DataService){
    this.GetBrands();
  }



  GetBrands(){
    return this._DataService.getdata('brands').subscribe((response)=>{
      this.BrandData=response.data;
    })
  }

}

