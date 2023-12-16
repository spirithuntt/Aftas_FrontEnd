import { PodiumService } from './../../services/results/podium.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ranking } from 'src/app/models/ranking';

@Component({
  standalone: true,
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css'],
  imports: [CommonModule],
})
export class PodiumComponent {
  podiumResults: Ranking[] = [];

  constructor(private PodiumService: PodiumService) {}

  ngOnInit(): void {
    this.PodiumService.getPodium().subscribe((data: Ranking[]) => {
      this.podiumResults = data;
    });
  }
  
}
