import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentModel } from './student.model';
import { ApiService } from '../shared/api.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  formValue  !: FormGroup;
  employeeModelObject : StudentModel = new StudentModel();
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void { 
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : [''],
      age : [''],
      course : [''],
      father : [''],
      mother : [''],
      address : [''],
    })
    this.getAllEmployee();
  }

  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postEmployeeDetails(){
    this.employeeModelObject.firstName = this.formValue.value.firstName;
    this.employeeModelObject.lastName = this.formValue.value.lastName;
    this.employeeModelObject.email = this.formValue.value.email;
    this.employeeModelObject.mobile = this.formValue.value.mobile;
    this.employeeModelObject.age = this.formValue.value.age;  
    this.employeeModelObject.course = this.formValue.value.course;  
    this.employeeModelObject.father = this.formValue.value.father;  
    this.employeeModelObject.mother = this.formValue.value.mother;  
    this.employeeModelObject.address = this.formValue.value.address;  

    this.api.postEmployee(this.employeeModelObject)
    .subscribe(res=>{
      console.log(res);
      alert("Student Added Successfuly");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();  
      this.getAllEmployee();
    }, err=>{
        alert("Something went wrong")
    })
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }

  deleteEmployee(row : any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Employee Deleted");
      this.getAllEmployee();
    })
  }

  oneEdit(row : any){
    this.employeeModelObject.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['age'].setValue(row.age);
    this.formValue.controls['course'].setValue(row.course);
    this.formValue.controls['father'].setValue(row.father);
    this.formValue.controls['mother'].setValue(row.mother);
    this.formValue.controls['address'].setValue(row.address);

    this.showAdd = false;
    this.showUpdate = true;
  }

  updateEmployeeDetails(){
    this.employeeModelObject.firstName = this.formValue.value.firstName;
    this.employeeModelObject.lastName = this.formValue.value.lastName;
    this.employeeModelObject.email = this.formValue.value.email;
    this.employeeModelObject.mobile = this.formValue.value.mobile;
    this.employeeModelObject.age = this.formValue.value.age; 
    this.employeeModelObject.course = this.formValue.value.course; 
    this.employeeModelObject.father = this.formValue.value.father; 
    this.employeeModelObject.mother = this.formValue.value.mother; 
    this.employeeModelObject.address = this.formValue.value.address; 

    this.api.updateEmployee(this.employeeModelObject, this.employeeModelObject.id)
    .subscribe(res=>{
      alert("Updated Successfuly");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();  
      this.getAllEmployee();
    })
  }

}
