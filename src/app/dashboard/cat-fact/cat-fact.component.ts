import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.scss']
})
export class CatFactComponent implements OnInit {
  factRes!: any;

  constructor(private restApiService: RestApiService) { }

  ngOnInit(): void {
    this.getAnotherFact();
  }

  getAnotherFact() {
    this.restApiService.getCatFact().subscribe(response => {
      this.factRes = response
    })
  }

}
