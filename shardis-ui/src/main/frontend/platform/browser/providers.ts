import {FORM_PROVIDERS, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {MATERIAL_PROVIDERS} from './material2';
import {NG2_WEBSTORAGE} from 'ng2-webstorage';
import {asyncRoutes, routes} from '../../app/app.routes';
import {provideWebpack} from './webpack/webpack-component-resolver';
import {provideRouter} from '@angular/router';

/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...MATERIAL_PROVIDERS,
  ...NG2_WEBSTORAGE,
  provideRouter(routes),
  provideWebpack(asyncRoutes),
  {
    provide: LocationStrategy,
    useClass: PathLocationStrategy as any
  },
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
