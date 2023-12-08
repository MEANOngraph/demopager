import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CatFactComponent } from './cat-fact/cat-fact.component';
import { SunriseSunsetComponent } from './sunrise-sunset/sunrise-sunset.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [DashboardComponent, CatFactComponent, SunriseSunsetComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class DashboardModule { }
