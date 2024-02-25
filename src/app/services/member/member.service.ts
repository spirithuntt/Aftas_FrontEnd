import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  unlockAccount(userId: number): Observable<void> {
    const url = `${this.apiUrl}/role/unlock/${userId}`;
    console.log('Unlocking account:', url);
    return this.http.put<void>(url, {});
  }

  //get all members
  getAllMembers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/members`);
  }

}
