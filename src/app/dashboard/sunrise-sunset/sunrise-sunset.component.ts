import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestApiService } from 'src/app/services/rest-api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sunrise-sunset',
  templateUrl: './sunrise-sunset.component.html',
  styleUrls: ['./sunrise-sunset.component.scss']
})
export class SunriseSunsetComponent implements OnInit {
  form: FormGroup = new FormGroup({
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    date: new FormControl(''),
  });

  sunriseDetail!: any;

  constructor(private restApiService: RestApiService, private _sharedService: SharedService) { }

  ngOnInit(): void {
    let formDetail = {
      latitude: this._sharedService.latLongDetail.lat,
      longitude: this._sharedService.latLongDetail.lng,
      date: new Date(this._sharedService.latLongDetail.date)
    }
    this.form.setValue(formDetail)
  }

  submit(){
    if (this.form.valid) {
      let formattedDate: any = new Date(this.form.value['date']);
      formattedDate = `${formattedDate.getFullYear()}-${formattedDate.getMonth() + 1}-${formattedDate.getDate()}`;
      let requestParams = {
        lat: this.form.value['latitude'],
        lng: this.form.value['longitude'],
        date: formattedDate,
      }
      this._sharedService.latLongDetail = requestParams;

      this.restApiService.getSunriseDetail(requestParams).subscribe((response: any) => {
        if (response && response.results) {
          this.sunriseDetail = response.results;
        }
      })
    }
  }

}
