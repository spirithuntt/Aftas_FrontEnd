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
  private apiUrl = 'http://localhost:8080/api/podium/1';

  constructor(private http:HttpClient) { }

  getPodium(): Observable<Ranking[]>{
    return this.http.get<Ranking[]>(this.apiUrl).pipe(
        map((res: any) => res.data)
    )
  }
}
