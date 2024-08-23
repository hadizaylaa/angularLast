import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponetsColor0Component } from './componets-color0/componets-color0.component';
import { MaincompontsComponent } from './maincomponts/maincomponts.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponetsColor0Component,
    MaincompontsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
