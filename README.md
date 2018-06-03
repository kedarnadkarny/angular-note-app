# Ng3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Setup Project on local computer
1. Open terminal and enter `git clone https://github.com/kedarnadkarny/angular-note-app.git`

2. `cd angular-note-app`

3. `npm install` to install all the dependencies

4. Create a project on firebase and add your project details to environment.ts file
```
export const environment = {
  production: false,
    firebase: {
        apiKey: "XXXXXXXXXXX-XXXXXXXXXXX",
        authDomain: "project.yourapp.com",
        databaseURL: "URLtoYourDatabase",
        projectId: "projectID",
        storageBucket: "BucketURL",
        messagingSenderId: "messagingId"
    }
};
```

5. Change database rules in firebase to (Security warning!)-
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
