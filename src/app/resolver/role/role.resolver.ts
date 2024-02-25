import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RoleResponseDTO } from '../../models/role';
import { RoleService } from '../../services/role/role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleResolver implements Resolve<RoleResponseDTO[]> {

  constructor(private roleService: RoleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoleResponseDTO[]> {
    return this.roleService.getAllRoles().pipe(
      catchError((error) => {
        console.error('Error fetching roles:', error);

        if (error.status === 403) {
          console.error('Access Forbidden. Please check your permissions.');
        }

        return of([]);
      })
    );
  }
}
