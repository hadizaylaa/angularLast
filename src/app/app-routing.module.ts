import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponetsColor0Component } from './componets-color0/componets-color0.component';
import { MaincompontsComponent } from './maincomponts/maincomponts.component';


const routes: Routes = [
  {path:'',component:MaincompontsComponent},
  {path:'ac',component:MaincompontsComponent},
  {path: 'other',component:ComponetsColor0Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
