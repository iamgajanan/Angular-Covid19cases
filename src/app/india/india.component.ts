import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  data
  Date
  global
  constructor(private service:Covid19Service) {
    this.getIndia()
   }

  ngOnInit(): void {
  }
  getIndia(){
    this.service.getall().subscribe(response=>{
      console.log(response)
      this.data=response
      this.global=this.data.Countries[76]
      this.Date=this.data.Date
      console.log(this.Date)
    })
  }
}
