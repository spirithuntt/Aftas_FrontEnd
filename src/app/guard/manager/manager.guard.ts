import { CanActivateFn, Router } from '@angular/router';

export const managerGuard: CanActivateFn = (route, state) => {

  const router = new Router;
   const storedRole = window.sessionStorage.getItem('auth-role');
   if (storedRole === 'MANAGER')
  {
    return true;
  }
  else
  {
    router.navigate(['/login']);
    return false;

  }
};
