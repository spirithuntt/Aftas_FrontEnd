import { CanActivateFn, Router } from '@angular/router';

export const memberGuard: CanActivateFn = (route, state) => {

  const router = new Router;
   const storedRole = window.sessionStorage.getItem('auth-role');
   if (storedRole === 'MANAGER' || storedRole ==='MEMBER')
  {
    return true;
  }

  else
  {
    router.navigate(['/login']);
    return false;

  }
};
