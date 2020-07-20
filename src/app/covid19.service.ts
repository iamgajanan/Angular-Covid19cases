import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
private getalldata="https://api.covid19api.com/summary"
private getStateurl="https://api.covidindiatracker.com/state_data.json"
  constructor(private http:HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any[]>(this.getalldata)
   }
   getState():Observable<any[]>{
    return this.http.get<any[]>(this.getStateurl)
   }
}
