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
  topicHasError= true;

     userModel = new User ('bob','rob@test.com',5566666699, 'default', 'morning', true)

     validateTopic(value)
     {
        if(value==="default")
        {
          this.topicHasError= true;
        }else{
          this.topicHasError= false;
        }
     }

  constructor(){}
 ngOnInit() {

 }
}
