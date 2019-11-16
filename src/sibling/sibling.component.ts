import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service'
@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  constructor(private config:ConfigService) {   }
msg:string;
  ngOnInit() {
    this.config.currentMsg.subscribe(message => this.msg=message);
    console.log("In sibling",this.msg)
  }


}