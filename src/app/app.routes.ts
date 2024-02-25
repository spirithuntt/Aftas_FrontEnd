import { Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { CreateCompetitionComponent } from './components/create-competition/create-competition.component';
import { RegisterMemberComponent } from './components/register-member/register-member.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { HuntingComponent } from './components/hunting/hunting.component';
import { PodiumComponent } from './components/podium/podium.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RoleComponent } from './components/role/role.component';
import { authGuard } from './guard/auth/auth.guard';
import { RoleResolver } from './resolver/role/role.resolver';
import { adminGuard } from './guard/admin/admin.guard';
import { BoardMemberComponent } from './components/board-member/board-member.component';
import { BoardManagerComponent } from './components/board-manager/board-manager.component';

export const routes: Routes = [
    { path: '', component: CompetitionComponent },
    { path: 'add-component', component: CreateCompetitionComponent },
    { path: 'register-member/:competitionCode', component: RegisterMemberComponent },
    { path: 'participants/:competitionCode', component: ParticipantComponent },
    { path: 'participants/:competitionCode/hunting/:member', component: HuntingComponent },
    { path: 'podium/:competitionCode', component: PodiumComponent },
    { path: 'add-member/:competitionCode', component: AddMemberComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'roles', component: RoleComponent, resolve: { roles: RoleResolver }, canActivate: [authGuard , adminGuard], },
    { path: 'board-member', component: BoardMemberComponent, canActivate: [authGuard, adminGuard] },
    { path: 'board-manager', component: BoardManagerComponent, canActivate: [authGuard, adminGuard] },



];
