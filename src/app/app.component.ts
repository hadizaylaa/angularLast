import { Component,OnInit,Input  } from '@angular/core';
import { ApiService} from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
CarData:any;
  data: any;
  constructor(private apiService : ApiService) {}

  ngOnInit() {
    this.apiService.fetchData().subscribe(data => {
      this.CarData = data;
    })
  }
}


