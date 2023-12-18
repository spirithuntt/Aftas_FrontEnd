import { CreateCompetitionComponent } from './../../components/create-competition/create-competition.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Competition } from 'src/app/models/competition';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CompetitionService {
  private apiUrl = environment.api + '/competitions';
  registerMember: any;

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]>{
    return this.http.get<Competition[]>(this.apiUrl).pipe(
        map((res: any) => res.data)
    )
  }

  CreateCompetitionComponent(competitionData: Competition): Observable<Competition> {
    return this.http.post(this.apiUrl, competitionData, httpOptions);
  }

}
