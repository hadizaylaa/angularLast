import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponetsColor1Component } from './componets-color1/componets-color1.component';
import { ComponetsColor2Component } from './componets-color2/componets-color2.component';
import { ComponetsColor0Component } from './componets-color0/componets-color0.component';
import { MaincompontsComponent } from './maincomponts/maincomponts.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponetsColor1Component,
    ComponetsColor2Component,
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
