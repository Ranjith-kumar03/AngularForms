import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public fullName;
  public username;
  public email;
  public phonenumber;
  public topics=["apple","mago","orange"]

  constructor(){}
 ngOnInit() {

 }
}
