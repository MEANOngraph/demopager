import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isLoggedInSub = new Subject<boolean>();
  isLoggedIn: boolean = false;
  loggedInUserName: string = '';
  latLongDetail: any = {lat: '', lng: '', date: ''}

  constructor() { }

  checkLoggedIn(): Observable<boolean> {
    return this.isLoggedInSub.asObservable();
  }

  updateLoggedIn(logged: boolean) {
    this.isLoggedIn = logged;
    this.isLoggedInSub.next(logged);
  }
}
