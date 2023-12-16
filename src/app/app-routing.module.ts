import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './components/competitions/competition.component';
import { PodiumComponent } from './components/podium/podium.component';
import { CreateCompetitionComponent } from './components/create-competition/create-competition.component';
import { RegisterMemberComponent } from './components/register-member/register-member.component';

const routes: Routes = [
  {
    path : '',
    component : CompetitionComponent ,
    title : 'Competitions Page'
  },
  {
    path: 'Podium/:competitionId',
    component : PodiumComponent ,
    title : 'Podium Page'
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
