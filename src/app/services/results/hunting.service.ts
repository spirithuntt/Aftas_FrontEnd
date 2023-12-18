import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { Hunting } from 'src/app/models/hunting';
import { Member } from './../../models/ranking';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  private apiUrl = 'http://localhost:8080/api/huntings/add-hunting-result';

  constructor(private http: HttpClient) {}

  createHuntingResult(competitionId: string, hunting: Hunting): Observable<any> {
    const params = { competitionId };

    return this.http.post(this.apiUrl, hunting, { params });
  }
}
