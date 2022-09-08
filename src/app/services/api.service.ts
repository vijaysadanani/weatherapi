import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weatherdata } from '../interfaces/weatherdata';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCharlotteWeather(): Observable<Weatherdata>{
    return this.httpClient.get<Weatherdata>('https://api.weather.gov/gridpoints/GSP/118,64/forecast');
  }
}
