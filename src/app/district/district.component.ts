import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  data
    global
    selectedIndex
    dat=[]
    selectedData
    daaaaa
    arry
    stateList=[]
    stateForm:FormGroup
  constructor(private service:Covid19Service,private fb:FormBuilder) {
    this.service.getDistrict().subscribe(response=>{
    // console.log(response)
    this.data=response
    this.stateList.push(response)
    console.log(this.stateList)
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
  this.selectedData=event.target.value
  console.log((this.selectedData))
  // var districtData=this.selectedData.
  } 
  dist(e){
  this.selectedData=e.target.value
  console.log((this.selectedData))
  }
}