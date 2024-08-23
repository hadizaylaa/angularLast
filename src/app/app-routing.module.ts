import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponetsColor0Component } from './componets-color0/componets-color0.component';
import { ComponetsColor1Component } from './componets-color1/componets-color1.component';
import { MaincompontsComponent } from './maincomponts/maincomponts.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
