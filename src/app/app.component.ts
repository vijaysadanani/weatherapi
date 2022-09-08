import { Component } from '@angular/core';
import { Weatherdata } from './interfaces/weatherdata';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Charlotte, NC Weather Forecast';
  constructor(private apiService: ApiService) {
    
  }

  weatherData!: Weatherdata | undefined;
  
  ngOnInit() {
    this.apiService.getCharlotteWeather().subscribe({
      next: result => {this.weatherData = result}, 
      error: (err) => console.log(err), 
      complete: () => console.log()
    })
  }
}
