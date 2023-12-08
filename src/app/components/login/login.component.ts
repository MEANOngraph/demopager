import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this._sharedService.updateLoggedIn(true);
      this._sharedService.loggedInUserName = this.form.value['username'];
      this.router.navigate(['/dashboard'])
    }
  }

}
