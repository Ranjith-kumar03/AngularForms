import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public topics=["apple","mago","orange"]

userModel = new User ('Rob','rob@test.com', 55666666, 'apple', 'morning', true)

  constructor(){}
 ngOnInit() {

 }
}
