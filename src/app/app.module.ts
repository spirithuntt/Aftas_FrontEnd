import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterMemberComponent } from './components/register-member/register-member.component';
import { InsertResultsComponent } from './components/insert-results/insert-results.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompetitionComponent } from './components/competitions/competition.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetitionService } from './services/competitions/competition.service';

@NgModule({
  declarations: [
    AppComponent,
    InsertResultsComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
