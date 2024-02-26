import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Competition } from '../../models/competition';
import { ResponseModel } from '../../core/request/response.model';
import { Member } from './../../models/member';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = "http://127.0.0.1:8080/api/v1";

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]>{
    return this.http.get<Competition[]>(this.apiUrl + `/competitions`).pipe(
        map((res: any) => res.data)
    )
  }
  getCompetitionData(params: any): Observable<any> {
    let httpParams = new HttpParams()
      .set('page', params['page'])
      .set('size', params['size']);
  
    return this.http.post<any>(`${this.apiUrl}page`, null, {
      reportProgress: true,
      params: httpParams
    });
  }
  addCompetition(competition: Competition): Observable<ResponseModel<Competition>>{
    return this.http.post<ResponseModel<Competition>>(this.apiUrl, competition);
  }

  getAllMemberCompetitions(): Observable<any> {
    const url = `${this.apiUrl}/ranking/competitions/member`;
    return this.http.get(url);
  }

}
