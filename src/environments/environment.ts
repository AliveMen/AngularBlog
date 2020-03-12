// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Enviroment} from './interface';

export const environment: Enviroment = {
  production: false,
  apiKey: 'AIzaSyA3FqKK7L0MkyzuxXKo70qap-ME_G8wUTc',
  authDomain: 'angular-blog-a3462.firebaseapp.com',
  databaseURL: 'https://angular-blog-a3462.firebaseio.com',
   projectId: 'angular-blog-a3462',
  storageBucket: 'angular-blog-a3462.appspot.com',
  messagingSenderId: '652513133930',
  appId: '1:652513133930:web:cdcecd99cd44e3427ad113'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
