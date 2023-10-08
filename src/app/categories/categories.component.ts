import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  catData:any[]=[];

  
  constructor(private _DataService:DataService){
    this.GetCategories();
 
  }
  GetCategories(){
    return this._DataService.getdata('categories').subscribe((response)=>{
      this.catData=response.data;
    })
  }


}
