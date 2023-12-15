import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCompetitionComponent } from './components/create-competition/create-competition.component';
import { RegisterMemberComponent } from './components/register-member/register-member.component';
import { InsertResultsComponent } from './components/insert-results/insert-results.component';
import { PodiumComponent } from './components/podium/podium.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompetitionComponent } from './components/competitions/competition.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    CreateCompetitionComponent,
    RegisterMemberComponent,
    InsertResultsComponent,
    PodiumComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
