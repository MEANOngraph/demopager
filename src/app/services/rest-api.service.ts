import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  getCatFact() {
    return this.http.get('https://catfact.ninja/fact')
  }

  getSunriseDetail(routerParams?: Params) {
    let queryParams: Params = {};
    if (routerParams) {
        queryParams = this.setParameter(routerParams);
    }
    return this.http.get('https://api.sunrise-sunset.org/json', { params: queryParams })
  }

  private setParameter(routerParams: Params): HttpParams {
    let queryParams = new HttpParams();
    for (const key in routerParams) {
      if (routerParams.hasOwnProperty(key)) {
          queryParams = queryParams.set(key, routerParams[key]);
      }
    }
    return queryParams;
}
}
