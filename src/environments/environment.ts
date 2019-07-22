// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  hmr       : false,
  firebase: {
      apiKey: "AIzaSyCfGM_1gvcVuyUWqxU7WnglVjOmOvJOGX8",
      authDomain: "artifex-c4411.firebaseapp.com",
      databaseURL: "https://artifex-c4411.firebaseio.com",
      projectId: "artifex-c4411",
      storageBucket: "artifex-c4411.appspot.com",
      messagingSenderId: "1051439785646",
      appId: "1:1051439785646:web:9669840b7d3af17c"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
