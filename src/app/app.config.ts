import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideState, provideStore} from '@ngrx/store';
import {foodsFeature} from './features/foods/store/features/foods.feature';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import {appEffects} from './appeffect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStoreDevtools(),
    provideStore(),
    provideState(foodsFeature),
    provideEffects(appEffects)
  ]
};

