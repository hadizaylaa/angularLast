import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl = 'http://localhost:3000/';
private carDataSubject = new BehaviorSubject<any>(null);
carData$ = this.carDataSubject.asObservable();
  constructor(private http : HttpClient) { }
  fetchData():Observable<any>{
    return this.http.get<any>(this.apiUrl).pipe(tap(Data => this.carDataSubject.next(Data)));
  }
}
