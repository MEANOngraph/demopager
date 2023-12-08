import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoggedIn: boolean = false;
  loggedInSubs?: Subscription; 

  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  checkLoggedIn(){
    this.loggedInSubs = this._sharedService.checkLoggedIn().subscribe((logged: boolean) => {
      this.isLoggedIn = logged;
    })
  }

  ngOnDestroy(){
    if(this.loggedInSubs) {
      this.loggedInSubs.unsubscribe();
    }
  }
}
