import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalRequestName = new Subject();

  constructor() {
    this.globalRequestName.next(this.globalRequestName);
   }

   public addNewName(value: any) {
    this.globalRequestName.next(value);
  }

}
