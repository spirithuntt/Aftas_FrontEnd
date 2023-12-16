import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { RegisterMemberC } from 'src/app/models/register-member';

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RegisterMemberService {
  private apiUrl = environment.api + '/registrations/register-user';
  constructor(private http:HttpClient) {
  }


  registerMember(member: RegisterMemberC): Observable<any> {
    return this.http.post(this.apiUrl, member, httpOptions);
  }
}
