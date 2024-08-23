import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-maincomponts',
  templateUrl: './maincomponts.component.html',
  styleUrls: ['./maincomponts.component.css']
})
export class MaincompontsComponent implements OnInit{
  CarData:any;
  data: any;
  constructor(private apiservice : ApiService){}
ngOnInit(): void {
  this.apiservice.fetchData().subscribe(data =>{
    this.CarData = data
  })
}
}
