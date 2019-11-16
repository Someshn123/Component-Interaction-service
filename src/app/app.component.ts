import { Component,ViewChild,AfterViewInit,OnInit } from '@angular/core';
import {ChildComponent} from './child/child.component'
import {ConfigService} from '../config.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  newmsg:string;
  constructor(){}

@ViewChild(ChildComponent,{static:false}) child;
ngAfterViewInit(){
  this.newmsg=this.child.message;
}
ngOnInit(){

}

}
