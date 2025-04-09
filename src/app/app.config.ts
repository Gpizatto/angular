import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';


import {MatToolbarModule} from "@angular/material/toolbar";


export default [
  MatToolbarModule,

 
] 



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)],
  
}


