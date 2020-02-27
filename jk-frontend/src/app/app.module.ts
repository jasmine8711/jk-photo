import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './layouts/default/default.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, RouterModule,
    SharedModule,
    DefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
