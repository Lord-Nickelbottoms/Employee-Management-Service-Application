import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Component imports
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewSingleEmpComponent } from './pages/view-single-emp/view-single-emp.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateInsertComponent } from './pages/create-insert/create-insert.component';
import { ViewAllEmpComponent } from './pages/view-all-emp/view-all-emp.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path: "pages/create-insert", component: CreateInsertComponent },
  { path: "pages/view-all-emp", component: ViewAllEmpComponent },
  { path: "pages/view-single-emp", component: ViewSingleEmpComponent },
  { path: "pages/edit", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
