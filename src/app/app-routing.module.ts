import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { PodiumComponent } from './components/podium/podium.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateCompetitionComponent } from './components/create-competition/create-competition.component';
import { RegisterMemberComponent } from './components/register-member/register-member.component';

const routes: Routes = [
  {
    path : 'Competitions',
    component : CompetitionComponent ,
    title : 'Competitions Page'
  },
  {
    path : 'Podium',
    component : PodiumComponent ,
    title : 'Podium Page'
  },
  {
    path : '',
    component : DashboardComponent ,
    title : 'Dashboard Page'
  },
  {
    path : 'Create-competition',
    component : CreateCompetitionComponent ,
    title : 'Create a Competition Page'
  },
  {
    path: 'Register-member',
    component: RegisterMemberComponent,
    title: 'Register Member Page'
  },
  {
    path: 'Podium',
    component: PodiumComponent,
    title: 'Podium Page'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
