import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  stateSubject = new Subject<any>()
  $stateSubject = this.stateSubject.asObservable()

  constructor() { }

  delete(id){
    this.stateSubject.next(
      {
        delete:id
      }
    )
  }
  
  done(id,value){
    this.stateSubject.next(
      {
        done:id,
        value
      }
    )
  }
}
