import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-componets-color0',
  templateUrl: './componets-color0.component.html',
  styleUrls: ['./componets-color0.component.css']
})
export class ComponetsColor0Component implements OnInit {
  carDATA : any;
  selectorColor : any;
constructor(private apiservice : ApiService){}
ngOnInit(): void {
  this.apiservice.fetchData().subscribe(data => {
    this.carDATA = data;
  })
}
}
