import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ReactiveFormsModule
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
