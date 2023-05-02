import { Component } from '@angular/core';

@Component({
  selector: 'app-view-single-emp',
  templateUrl: './view-single-emp.component.html',
  styleUrls: ['./view-single-emp.component.css']
})
export class ViewSingleEmpComponent {
  clickMethod(name: string) {
    if(confirm("Are you sure to delete this user?")) {
      console.log("Implement delete functionality here");
    }
  }
}
