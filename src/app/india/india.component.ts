import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  data
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
      console.log(this.global.TotalConfirmed.toLocaleString('en-IN'))
    })
  }
}
