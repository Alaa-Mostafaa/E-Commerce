import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchh'
})
export class SearchhPipe implements PipeTransform {

  transform(products:any[], search:string): any[] {
    return products.filter((el)=>{
      return el.title.toLowerCase().includes(search.toLocaleLowerCase())
    });
  }

}
