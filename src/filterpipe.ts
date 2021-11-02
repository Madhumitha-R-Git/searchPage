import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string,filterMetadata: any): any[] {
    let filtereditems:any[]
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
        if(typeof(it)=='string')
      return it.toString().toLocaleLowerCase().includes(searchText);
      else{
          it =  JSON.stringify(it)
          // console.log(typeof(it))
          filtereditems =  it.toString().toLocaleLowerCase().includes(searchText);
          filterMetadata.count = 23456
          console.log(filterMetadata.count)
          return filtereditems
      }
    });
  }
}