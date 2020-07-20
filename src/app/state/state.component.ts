import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';

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
  selectedData=[]
  daaaaa
  stateList=[]
  stateForm:FormGroup
  constructor(private service:Covid19Service,private fb:FormBuilder) {
    this.service.getState().subscribe(response=>{
      // console.log(response)
      this.data=response
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
  states(d){
    console.log(d)
  }
}
