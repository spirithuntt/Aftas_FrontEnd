import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthService } from '../app/services/auth/auth.service';
import { httpInterceptorProviders } from '../app/helpers/http-request.interceptor';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    httpInterceptorProviders
  ]
};
