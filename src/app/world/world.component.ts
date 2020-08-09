import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  last_update
  data
  global
  constructor(private service:Covid19Service) { 
    this.getWorld()
  }

  ngOnInit(): void {
  }
  getWorld(){
    this.service.getall().subscribe(response=>{
      console.log(response)
      this.data=response
      this.global=this.data.Global
      console.log(this.global.TotalConfirmed.toLocaleString('en-IN'))
    })

  }
}
