import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http'
import { UserServicesService } from './services/user-services.service';
import { FormsModule, NgModel } from '@angular/forms';
import { TypeuserFormComponent } from './components/typeuser-form/typeuser-form.component';
import { TypeuserListComponent } from './components/typeuser-list/typeuser-list.component';
import { TypeuserServicesService } from './services/typeuser-services.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserFormComponent,
    TypeuserFormComponent,
    TypeuserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServicesService,TypeuserServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
