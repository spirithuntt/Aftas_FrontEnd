import { Component } from '@angular/core';
import { CompetitionService } from '../../services/competition/competition.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-member.component.html',
  styleUrl: './board-member.component.css'
})
export class BoardMemberComponent {
  competitions: any[] = [];
  constructor(private competitionService: CompetitionService) { }

  ngOnInit(): void {
    this.competitionService.getAllMemberCompetitions().subscribe(
      (data) => {
        this.competitions = data.data;
        console.log(this.competitions);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

}
