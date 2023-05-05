import { Employee } from 'src/app/employee';
import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements PipeTransform {

  filterTerm='';
  Employee:any[]=[];

  transform(Employee:any[],filterTerm: string): any[] {
      if (!Employee) return [];
      return Employee.filter(item =>
        {
        
        })
  }

  

}
