import { Injectable  } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ConfigService {
 constructor() { }

private message = new BehaviorSubject('default Message.'); 
currentMsg= this.message.asObservable();

updateMsg(msg:string){
 this.message.next(msg);
}

}