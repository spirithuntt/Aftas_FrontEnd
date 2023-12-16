import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Ranking } from 'src/app/models/ranking';
import { Observable, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PodiumService {
  private apiUrl = environment.api + '/rankings/podium';

  constructor(private http:HttpClient) { }

  getPodiumData(competitionId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${competitionId}`, httpOptions)
  }
}
