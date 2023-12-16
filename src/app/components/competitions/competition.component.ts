import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Competition } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competitions/competition.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent {

  competitions: Competition[] = [];
filteredCompetitions: any;

  constructor(private competitionService: CompetitionService) { }

  ngOnInit(): void {
    this.competitionService.getCompetitions().subscribe((data: Competition[]) => {
      this.competitions = data;
    })
  }

  compareDateWithCurrentDate(competitionDate: Date | undefined): number {
    if (competitionDate) {
      const dateObject = new Date(competitionDate);
      const currentDate = new Date();
      currentDate.setHours(1);
      currentDate.setMinutes(0);
      currentDate.setSeconds(0);
      currentDate.setMilliseconds(0);
      if (dateObject.getTime() > currentDate.getTime()) return 1;
      else if (dateObject.getTime() == currentDate.getTime()) return 2;
      else return 3;
    }
    return 0;
  }


}
