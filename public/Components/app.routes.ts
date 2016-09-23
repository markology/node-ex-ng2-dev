import {HomeComponent} from 'general/home.component';
import {InfoComponent} from 'general/info.component';
// import {FourOhFour} from 'general/404.component';

import { provideRouter, RouterConfig } from '@angular/router';


const  routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  }            
]

export const appRouterProviders = [
  provideRouter(routes)
];

