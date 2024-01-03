import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  ngOnInit(): void {
  //  this.active = false; 
   this.searchWeatherData()
  console.log(this.city)
  }
  active = false;
  active5 = false;
  city = 'landon';
  weatherData : any;
  weatherDataFor5Days : any = []
  finalDatas : any = []
  iconURL : string = ''
  iconURL5: string = ''
  CityName: any= []

  constructor(private http: HttpClient){}

  searchWeatherData(){
    
    const apiKey = "497f10c1dcc68ec711f711cdb33b00f6"
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid="+apiKey+"&units=metric"

    this.http.get(apiURL).subscribe((data: any)=> {
      this.weatherData = data;
      console.log(this.weatherData)
      this.iconURL = 'https://openweathermap.org/img/wn/'+ this.weatherData.weather[0].icon +'@2x.png'
      console.log(this.iconURL)
    })
  }
  
 searchFor5Days(){
  
  
  
  const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q='+this.city+'&appid=497f10c1dcc68ec711f711cdb33b00f6&units=metric'

  this.http.get(apiURL).subscribe((data : any)=>{
    console.log(data)
    this.CityName = data
    
    for(let i = 0; i<40 ; i=i+8){
      // console.log(data.list[i])
      this.finalDatas.push(data.list[i])
      console.log(this.finalDatas)
    //   //  this.finalDatas = this.weatherDataFor5Days.list[i]
    // this.finalDatas.push(data.list[i])
      //  console.log(this.finalDatas)
    //    console.log(typeof this.finalDatas)
      //  this.iconURL5 = this.iconURL = 'https://openweathermap.org/img/wn/'+ this.finalDatas.weather[0].icon +'@2x.png'
    }
  })
 }  

}
