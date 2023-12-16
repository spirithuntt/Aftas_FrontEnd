// components/podium/podium.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodiumService } from './../../services/results/podium.service';
import { Ranking } from 'src/app/models/ranking';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css'],
})
export class PodiumComponent implements OnInit {
  competitionId: string | null = null;
  podiumData: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private podiumService: PodiumService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.competitionId = params.get('competitionId');
      if (this.competitionId) {
        this.podiumService.getPodiumData(this.competitionId).subscribe(response => {

          if (Array.isArray(response.data)) {
            this.podiumData = response.data.map((ranking: any) => {
              return {
                rank: ranking.rank,
                member: ranking.member?.name,
                score: ranking.score,
              };
            });
            console.log('Podium data:', this.podiumData);
          } else {
            console.error('Invalid response format. Expected an array.');
          }
        });
      }
    });
  }



}
