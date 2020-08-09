import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  data
  global
  selectedIndex
  dat=[]
  selectedData
  daaaaa
  stateList=[]
  stateForm:FormGroup
  constructor(private service:Covid19Service,private fb:FormBuilder) {
    this.service.getState().subscribe(response=>{
      console.log(response)
      this.data=response
      // const values = Object.keys(response).map(it => response[it])
      // console.log(values)
      // console.log(JSON.stringify(this.data))
      // this.global=JSON.stringify(this.data)
      // console.log(this.global)
      // this.daaaaa= this.states(response);
    })
   }

  ngOnInit(): void {
this.stateForm=this.fb.group(
  {
    state:['']
  }
)
  }
  states(event){
    // console.log(d)
    // this.selectedData=event.target.value.replace(/\n/g, '');
    this.selectedData=event.target.value;

    console.log((this.selectedData))
  //  console.log(this.data)
 
  this.daaaaa= this.data.filter((d)=>d.state===this.selectedData
  )
  console.log(this.daaaaa[0].state)
    // var districtData=this.selectedData.
  }
}
