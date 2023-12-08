import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = '';
  searching: boolean = false;
  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.userName = this._sharedService.loggedInUserName;
  }

  logout() {
    this._sharedService.loggedInUserName = '';
    this._sharedService.updateLoggedIn(false)
  }

}
