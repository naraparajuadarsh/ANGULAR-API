import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MyProgramService } from './my-program.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  objects:any=[]
  students:any=[]

  myform:FormGroup;

  mysalary:FormGroup;

  constructor(private myservice:MyProgramService){

    this.mysalary=new FormGroup({

      name:new FormControl(),
      salary:new FormControl(),
      age:new FormControl()

    })

    this.myform=new FormGroup({
      
      name:new FormControl(),
      job:new FormControl()

    })

    this.myservice.getemployes().subscribe(value=>{
      this.objects=value.data;
      console.log(value)
    })

    this.myservice.getstudents().subscribe(value=>{
      this.students=value.data;
      console.log(value)
    })

  }

  subimit(){
    console.log(this.myform.value)
    this.myservice.postteachers(this.myform.value).subscribe(value=>{
      alert("sucess")
    },
    error=>{
      alert("fail")
    })
  }

  submit2(){
    console.log(this.mysalary.value)
    this.myservice.postsalary(this.mysalary.value).subscribe(
      value=>{
        alert("sucess")
      },
      error=>{
        alert("fail")
      })
  }

}
