import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Port1Component } from './port1/port1.component';
import { Port2Component } from './port2/port2.component';
import { Port3Component } from './port3/port3.component';
import { CatsComponent } from './cats/cats.component';

const routes: Routes = [
  { path: 'port1', component: Port1Component },
  { path: 'port2', component: Port2Component },
  { path: 'port3', component: Port3Component },
  { path: 'cats', component: CatsComponent },
  { path: '', redirectTo: '/port1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
