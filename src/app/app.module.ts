import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';        //import FormsModule
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule                    //Add in Imports Array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }