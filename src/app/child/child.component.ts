import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../config.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service:ConfigService) { }
 message="Hello from child";
 msg:string;
  ngOnInit() {
this.service.currentMsg.subscribe(msg=>this.msg=msg);
console.log("In the sibling", this.msg)
  }

myFunction(){
  this.service.updateMsg(this.message);
}

}