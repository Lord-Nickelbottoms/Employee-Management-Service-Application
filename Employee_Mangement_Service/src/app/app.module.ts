import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateInsertComponent } from './pages/create-insert/create-insert.component';
import { ViewSingleEmpComponent } from './pages/view-single-emp/view-single-emp.component';
import { EditComponent } from './pages/edit/edit.component';
import { ViewAllEmpComponent } from './pages/view-all-emp/view-all-emp.component';
import { WelcomeadminComponent } from './component/welcomeadmin/welcomeadmin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CreateInsertComponent,
    ViewSingleEmpComponent,
    EditComponent,
    ViewAllEmpComponent,
    WelcomeadminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
