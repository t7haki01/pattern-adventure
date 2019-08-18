
# pattern-adventure demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Description

Quick demo proto type for pattern adventure web shop / application, with MEAN stack part of back end,

## Requirement

Node.js version > 10.15.1
NPM version > 6.4.1
Angular CLI > 7.3.8
MySQL server
++
Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.13.8 (cli-only)
@angular-devkit/core         7.3.8 (cli-only)
@angular-devkit/schematics   7.3.8 (cli-only)
@schematics/angular          7.3.8 (cli-only)
@schematics/update           0.13.8 (cli-only)

## Quick Simple Guide

1. Set the values properly "./config/db.ex.js" with changing file name from "db.ex.js" to "db.js" following instruction in the file and "./config/setting.ex.json" file also with changing name to "setting.json" setting values properly follwing instruction in the file.

2. For the proper JWT(Json Web Token), required to have private key, public key generated RSA, which i used simply "http://travistidwell.com/jsencrypt/demo/" and can be acquired and naming "public.key", "private.key" in the directory "/confidentials" (*if not exist, required to create) on the same level directory of "app.js".

3. Run the "npm install" to install required dependencies for the application.

4. Build the application developer mode with "ng build" in the "/pattern-in-angular" with using angular cli
* Currently application is on the developer mode

* Simply saying that, Express.js back end application would listen on the port that set on the "setting.json" and front end file that built with angular cli / webpack is all in the "/pattern-in-angular/dist/pattern-in-angular" so static file path is indicated to the built file with wild card path. Application can be checked by running "node app.js" or running backend and frontend separately in different port with using concurrently or some other dependency.

## Test

Unit Test - `ng test` via [Karma](https://karma-runner.github.io)

End-To-End Test - `ng e2e` via [Protractor](http://www.protractortest.org/)

## Security

Dependency vulnerability Check - `snyk test` via [Snyk](https://snyk.io)

## Further help
t7haki01@students.oamk.fi
