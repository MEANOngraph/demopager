import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFactComponent } from './cat-fact/cat-fact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SunriseSunsetComponent } from './sunrise-sunset/sunrise-sunset.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cat-fact', component: CatFactComponent},
  { path: 'sunrise-sunset', component: SunriseSunsetComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
