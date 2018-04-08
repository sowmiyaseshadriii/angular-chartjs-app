import { Component, OnInit } from '@angular/core';
import { PopulationService } from '../population.service';
import { Chart } from 'chart.js';
import {map} from 'rxjs/operator/map';
import {UserService} from '../user.service';
@Component({
  selector: 'app-chartform',
  templateUrl: './chartform.component.html',
  styleUrls: ['./chartform.component.css']
})

export class ChartformComponent implements OnInit {

  chart = []; 
  chartType = 'bar';
  barChart;
  data;
  options;
  bgcolor='#34ddde';
  bgcolor1='#31dcde';
 
    constructor(private _population: PopulationService,private user: UserService) {}
  
    ngOnInit() {
       
      console.log('Is User Logged?', this.user.getUserLoggedIn());
         this._population.populationbyCountry()
           .subscribe(
             (res: any)=>{
               console.log(res);
               let allcountries = res.map(res=> res.country);
               console.log(allcountries);
               let population= res.map(res=> res.total);
               console.log(population);
               let femalepopulation= res.map(res=> res.females);
               console.log(femalepopulation);
              
               this.data={
                labels: allcountries,
                datasets: [
                  { 
                    labels:"totalpeople",
                    data: population ,
                    backgroundColor: this.bgcolor,
                    
                                
                    
                  
                  }
               /*   { 
                   labels:"females",
                   data: femalepopulation,
                   backgroundColor: this.bgcolor1
                            
                   
                 
                 }   */             
                ]
              };

              this.options={
                responsive: true,
                maintainAspectRatio: true,
                legend: {
                  display: false,
                  
                },
                scales: {
                  xAxes: [{
                    display: true,
                    ticks: {
                      fontColor: "#fff", // this here
                    }
                  }],
                 yAxes: [{
                   ticks:{
                    display: true,
                    beginAtZero: true,
                    fontColor: "#fff"
                   }
                  }],
                  title: {
                   display: true,
                   text: "World of Charts",
                   fontSize: 20
                 },
                }
              };
       
              this.barChart=new Chart('canvas',{
                type: this.chartType,
                data: this.data,
                options: this.options
               });      
              
       })
      
           
     
    }
   
 toggleChart(){
      this.barChart.destroy();
      this.chartType = (this.chartType == 'bar') ? 'line' : 'bar';
      this.ngOnInit();
      }
 restyleChart(){
  this.barChart.destroy();
      this.bgcolor=this.randomColorGenerator(); 
      this.bgcolor1=this.randomColorGenerator();
      this.ngOnInit();
   }
   randomColorGenerator() { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
  };
}
