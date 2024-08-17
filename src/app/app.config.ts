import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { environment } from '@environments/environment';

type AppConfig = ApplicationConfig &{
  production: boolean;
  API_URL: string;
};

export const appConfig: AppConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    NG_EVENT_PLUGINS,
    provideStore(),
  ],
  production: environment.production,
  API_URL: environment.API_URL,
};
