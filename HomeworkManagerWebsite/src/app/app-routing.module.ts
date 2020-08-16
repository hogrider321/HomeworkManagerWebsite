import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { NewAssignmentComponent } from './new-assignment/new-assignment.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'new-assignment', component: NewAssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
