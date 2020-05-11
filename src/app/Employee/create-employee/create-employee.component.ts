import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  ///public fullName;
  public emailid;
  public phonenumber;

  constructor() { }

  ngOnInit(): void {
  }
}

